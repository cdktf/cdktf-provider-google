// https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the Security Health Analytics custom module. This
  * display name becomes the finding category for all findings that are
  * returned by this custom module. The display name must be between 1 and
  * 128 characters, start with a lowercase letter, and contain alphanumeric
  * characters or underscores only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#display_name SccManagementProjectSecurityHealthAnalyticsCustomModule#display_name}
  */
  readonly displayName?: string;
  /**
  * The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#enablement_state SccManagementProjectSecurityHealthAnalyticsCustomModule#enablement_state}
  */
  readonly enablementState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#id SccManagementProjectSecurityHealthAnalyticsCustomModule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location ID of the parent organization. If not provided, 'global' will be used as the default location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#project SccManagementProjectSecurityHealthAnalyticsCustomModule#project}
  */
  readonly project?: string;
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_config SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_config}
  */
  readonly customConfig?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#timeouts SccManagementProjectSecurityHealthAnalyticsCustomModule#timeouts}
  */
  readonly timeouts?: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts;
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
  /**
  * Description of the expression. This is a longer text which describes the
  * expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a
  * file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can
  * be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}
  */
  readonly title?: string;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
  /**
  * Name of the property for the custom output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#name SccManagementProjectSecurityHealthAnalyticsCustomModule#name}
  */
  readonly name?: string;
  /**
  * value_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#value_expression SccManagementProjectSecurityHealthAnalyticsCustomModule#value_expression}
  */
  readonly valueExpression?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_expression: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToTerraform(struct!.valueExpression),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_expression: {
      value: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct!.valueExpression),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueExpression = this._valueExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueExpression.internalValue = value.valueExpression;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value_expression - computed: false, optional: true, required: false
  private _valueExpression = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(this, "value_expression");
  public get valueExpression() {
    return this._valueExpression;
  }
  public putValueExpression(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression) {
    this._valueExpression.internalValue = value;
  }
  public resetValueExpression() {
    this._valueExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExpressionInput() {
    return this._valueExpression.internalValue;
  }
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList extends cdktf.ComplexList {
  public internalValue? : SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference {
    return new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#properties SccManagementProjectSecurityHealthAnalyticsCustomModule#properties}
  */
  readonly properties?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktf.IResolvable;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToTerraform, true)(struct!.properties),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties.internalValue = value.properties;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
  /**
  * Description of the expression. This is a longer text which describes the
  * expression, e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#expression SccManagementProjectSecurityHealthAnalyticsCustomModule#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a
  * file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#location SccManagementProjectSecurityHealthAnalyticsCustomModule#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can
  * be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#title SccManagementProjectSecurityHealthAnalyticsCustomModule#title}
  */
  readonly title?: string;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
  /**
  * The resource types to run the detector on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_types SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_types}
  */
  readonly resourceTypes: string[];
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig {
  /**
  * Text that describes the vulnerability or misconfiguration that the custom
  * module detects. This explanation is returned with each finding instance to
  * help investigators understand the detected issue. The text must be enclosed in quotation marks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#description SccManagementProjectSecurityHealthAnalyticsCustomModule#description}
  */
  readonly description?: string;
  /**
  * An explanation of the recommended steps that security teams can take to resolve
  * the detected issue. This explanation is returned with each finding generated by
  * this module in the nextSteps property of the finding JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#recommendation SccManagementProjectSecurityHealthAnalyticsCustomModule#recommendation}
  */
  readonly recommendation: string;
  /**
  * The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#severity SccManagementProjectSecurityHealthAnalyticsCustomModule#severity}
  */
  readonly severity: string;
  /**
  * custom_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#custom_output SccManagementProjectSecurityHealthAnalyticsCustomModule#custom_output}
  */
  readonly customOutput?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#predicate SccManagementProjectSecurityHealthAnalyticsCustomModule#predicate}
  */
  readonly predicate: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;
  /**
  * resource_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#resource_selector SccManagementProjectSecurityHealthAnalyticsCustomModule#resource_selector}
  */
  readonly resourceSelector: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    severity: cdktf.stringToTerraform(struct!.severity),
    custom_output: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToTerraform(struct!.customOutput),
    predicate: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToTerraform(struct!.predicate),
    resource_selector: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToTerraform(struct!.resourceSelector),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference | SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_output: {
      value: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputToHclTerraform(struct!.customOutput),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputList",
    },
    predicate: {
      value: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateList",
    },
    resource_selector: {
      value: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorToHclTerraform(struct!.resourceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._customOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOutput = this._customOutput?.internalValue;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    if (this._resourceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._recommendation = undefined;
      this._severity = undefined;
      this._customOutput.internalValue = undefined;
      this._predicate.internalValue = undefined;
      this._resourceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._recommendation = value.recommendation;
      this._severity = value.severity;
      this._customOutput.internalValue = value.customOutput;
      this._predicate.internalValue = value.predicate;
      this._resourceSelector.internalValue = value.resourceSelector;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // recommendation - computed: false, optional: false, required: true
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // custom_output - computed: false, optional: true, required: false
  private _customOutput = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(this, "custom_output");
  public get customOutput() {
    return this._customOutput;
  }
  public putCustomOutput(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput) {
    this._customOutput.internalValue = value;
  }
  public resetCustomOutput() {
    this._customOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputInput() {
    return this._customOutput.internalValue;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigPredicate) {
    this._predicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }

  // resource_selector - computed: false, optional: false, required: true
  private _resourceSelector = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }
  public putResourceSelector(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector) {
    this._resourceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector.internalValue;
  }
}
export interface SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#create SccManagementProjectSecurityHealthAnalyticsCustomModule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#delete SccManagementProjectSecurityHealthAnalyticsCustomModule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#update SccManagementProjectSecurityHealthAnalyticsCustomModule#update}
  */
  readonly update?: string;
}

export function sccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsToTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsToHclTerraform(struct?: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module}
*/
export class SccManagementProjectSecurityHealthAnalyticsCustomModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_management_project_security_health_analytics_custom_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SccManagementProjectSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SccManagementProjectSecurityHealthAnalyticsCustomModule to import
  * @param importFromId The id of the existing SccManagementProjectSecurityHealthAnalyticsCustomModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SccManagementProjectSecurityHealthAnalyticsCustomModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_scc_management_project_security_health_analytics_custom_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/scc_management_project_security_health_analytics_custom_module google_scc_management_project_security_health_analytics_custom_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SccManagementProjectSecurityHealthAnalyticsCustomModuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_scc_management_project_security_health_analytics_custom_module',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._enablementState = config.enablementState;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._customConfig.internalValue = config.customConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ancestor_module - computed: true, optional: false, required: false
  public get ancestorModule() {
    return this.getStringAttribute('ancestor_module');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enablement_state - computed: false, optional: true, required: false
  private _enablementState?: string; 
  public get enablementState() {
    return this.getStringAttribute('enablement_state');
  }
  public set enablementState(value: string) {
    this._enablementState = value;
  }
  public resetEnablementState() {
    this._enablementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablementStateInput() {
    return this._enablementState;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_editor - computed: true, optional: false, required: false
  public get lastEditor() {
    return this.getStringAttribute('last_editor');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(this, "custom_config");
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfig) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      enablement_state: cdktf.stringToTerraform(this._enablementState),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      custom_config: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigToTerraform(this._customConfig.internalValue),
      timeouts: sccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablement_state: {
        value: cdktf.stringToHclTerraform(this._enablementState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_config: {
        value: sccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigToHclTerraform(this._customConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleCustomConfigList",
      },
      timeouts: {
        value: sccManagementProjectSecurityHealthAnalyticsCustomModuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SccManagementProjectSecurityHealthAnalyticsCustomModuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
