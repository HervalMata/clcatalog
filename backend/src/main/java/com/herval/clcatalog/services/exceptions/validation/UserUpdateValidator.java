package com.herval.clcatalog.services.exceptions.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.herval.clcatalog.dto.UserInsertDTO;
import com.herval.clcatalog.entities.User;
import com.herval.clcatalog.repositories.UserRepository;
import com.herval.clcatalog.resources.exceptions.FieldMessage;

public class UserUpdateValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {

	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private UserRepository repository;

	@Override
	public void initialize(UserInsertValid ann) {
	}

	@Override
	public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {

		@SuppressWarnings("unchecked")
		var urlVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
		Long userId = Long.parseLong(urlVars.get("id"));
		
		List<FieldMessage> list = new ArrayList<>();

		User user = repository.findByEmail(dto.getEmail());
		if (user != null && userId != user.getId()) {
			list.add(new FieldMessage("email", "E-mail já existe"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
					.addConstraintViolation();
		}
		return list.isEmpty();
	}
}
