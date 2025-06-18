/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamAccessBoundaryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#display_name IamAccessBoundaryPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#id IamAccessBoundaryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#name IamAccessBoundaryPolicy#name}
  */
  readonly name: string;
  /**
  * The attachment point is identified by its URL-encoded full resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#parent IamAccessBoundaryPolicy#parent}
  */
  readonly parent: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#rules IamAccessBoundaryPolicy#rules}
  */
  readonly rules: IamAccessBoundaryPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#timeouts IamAccessBoundaryPolicy#timeouts}
  */
  readonly timeouts?: IamAccessBoundaryPolicyTimeouts;
}
export interface IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
  * e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#description IamAccessBoundaryPolicy#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#expression IamAccessBoundaryPolicy#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting,
  * e.g. a file name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#location IamAccessBoundaryPolicy#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  * This can be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#title IamAccessBoundaryPolicy#title}
  */
  readonly title?: string;
}

export function iamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionToTerraform(struct?: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference | IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition): any {
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


export function iamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionToHclTerraform(struct?: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference | IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition): any {
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

export class IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition | undefined {
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

  public set internalValue(value: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition | undefined) {
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
export interface IamAccessBoundaryPolicyRulesAccessBoundaryRule {
  /**
  * A list of permissions that may be allowed for use on the specified resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#available_permissions IamAccessBoundaryPolicy#available_permissions}
  */
  readonly availablePermissions?: string[];
  /**
  * The full resource name of a Google Cloud resource entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#available_resource IamAccessBoundaryPolicy#available_resource}
  */
  readonly availableResource?: string;
  /**
  * availability_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#availability_condition IamAccessBoundaryPolicy#availability_condition}
  */
  readonly availabilityCondition?: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition;
}

export function iamAccessBoundaryPolicyRulesAccessBoundaryRuleToTerraform(struct?: IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference | IamAccessBoundaryPolicyRulesAccessBoundaryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availablePermissions),
    available_resource: cdktf.stringToTerraform(struct!.availableResource),
    availability_condition: iamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionToTerraform(struct!.availabilityCondition),
  }
}


export function iamAccessBoundaryPolicyRulesAccessBoundaryRuleToHclTerraform(struct?: IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference | IamAccessBoundaryPolicyRulesAccessBoundaryRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available_permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availablePermissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    available_resource: {
      value: cdktf.stringToHclTerraform(struct!.availableResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_condition: {
      value: iamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionToHclTerraform(struct!.availabilityCondition),
      isBlock: true,
      type: "list",
      storageClassType: "IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamAccessBoundaryPolicyRulesAccessBoundaryRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availablePermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.availablePermissions = this._availablePermissions;
    }
    if (this._availableResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableResource = this._availableResource;
    }
    if (this._availabilityCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityCondition = this._availabilityCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamAccessBoundaryPolicyRulesAccessBoundaryRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availablePermissions = undefined;
      this._availableResource = undefined;
      this._availabilityCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availablePermissions = value.availablePermissions;
      this._availableResource = value.availableResource;
      this._availabilityCondition.internalValue = value.availabilityCondition;
    }
  }

  // available_permissions - computed: false, optional: true, required: false
  private _availablePermissions?: string[]; 
  public get availablePermissions() {
    return this.getListAttribute('available_permissions');
  }
  public set availablePermissions(value: string[]) {
    this._availablePermissions = value;
  }
  public resetAvailablePermissions() {
    this._availablePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availablePermissionsInput() {
    return this._availablePermissions;
  }

  // available_resource - computed: false, optional: true, required: false
  private _availableResource?: string; 
  public get availableResource() {
    return this.getStringAttribute('available_resource');
  }
  public set availableResource(value: string) {
    this._availableResource = value;
  }
  public resetAvailableResource() {
    this._availableResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableResourceInput() {
    return this._availableResource;
  }

  // availability_condition - computed: false, optional: true, required: false
  private _availabilityCondition = new IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference(this, "availability_condition");
  public get availabilityCondition() {
    return this._availabilityCondition;
  }
  public putAvailabilityCondition(value: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition) {
    this._availabilityCondition.internalValue = value;
  }
  public resetAvailabilityCondition() {
    this._availabilityCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityConditionInput() {
    return this._availabilityCondition.internalValue;
  }
}
export interface IamAccessBoundaryPolicyRules {
  /**
  * The description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#description IamAccessBoundaryPolicy#description}
  */
  readonly description?: string;
  /**
  * access_boundary_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#access_boundary_rule IamAccessBoundaryPolicy#access_boundary_rule}
  */
  readonly accessBoundaryRule?: IamAccessBoundaryPolicyRulesAccessBoundaryRule;
}

export function iamAccessBoundaryPolicyRulesToTerraform(struct?: IamAccessBoundaryPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    access_boundary_rule: iamAccessBoundaryPolicyRulesAccessBoundaryRuleToTerraform(struct!.accessBoundaryRule),
  }
}


export function iamAccessBoundaryPolicyRulesToHclTerraform(struct?: IamAccessBoundaryPolicyRules | cdktf.IResolvable): any {
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
    access_boundary_rule: {
      value: iamAccessBoundaryPolicyRulesAccessBoundaryRuleToHclTerraform(struct!.accessBoundaryRule),
      isBlock: true,
      type: "list",
      storageClassType: "IamAccessBoundaryPolicyRulesAccessBoundaryRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamAccessBoundaryPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamAccessBoundaryPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._accessBoundaryRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessBoundaryRule = this._accessBoundaryRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamAccessBoundaryPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._accessBoundaryRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._accessBoundaryRule.internalValue = value.accessBoundaryRule;
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

  // access_boundary_rule - computed: false, optional: true, required: false
  private _accessBoundaryRule = new IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference(this, "access_boundary_rule");
  public get accessBoundaryRule() {
    return this._accessBoundaryRule;
  }
  public putAccessBoundaryRule(value: IamAccessBoundaryPolicyRulesAccessBoundaryRule) {
    this._accessBoundaryRule.internalValue = value;
  }
  public resetAccessBoundaryRule() {
    this._accessBoundaryRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBoundaryRuleInput() {
    return this._accessBoundaryRule.internalValue;
  }
}

export class IamAccessBoundaryPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : IamAccessBoundaryPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): IamAccessBoundaryPolicyRulesOutputReference {
    return new IamAccessBoundaryPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamAccessBoundaryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#create IamAccessBoundaryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#delete IamAccessBoundaryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#update IamAccessBoundaryPolicy#update}
  */
  readonly update?: string;
}

export function iamAccessBoundaryPolicyTimeoutsToTerraform(struct?: IamAccessBoundaryPolicyTimeouts | cdktf.IResolvable): any {
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


export function iamAccessBoundaryPolicyTimeoutsToHclTerraform(struct?: IamAccessBoundaryPolicyTimeouts | cdktf.IResolvable): any {
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

export class IamAccessBoundaryPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamAccessBoundaryPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamAccessBoundaryPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy google_iam_access_boundary_policy}
*/
export class IamAccessBoundaryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_access_boundary_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamAccessBoundaryPolicy to import
  * @param importFromId The id of the existing IamAccessBoundaryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamAccessBoundaryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_access_boundary_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/iam_access_boundary_policy google_iam_access_boundary_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamAccessBoundaryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamAccessBoundaryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_access_boundary_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.40.0',
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
    this._id = config.id;
    this._name = config.name;
    this._parent = config.parent;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new IamAccessBoundaryPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: IamAccessBoundaryPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamAccessBoundaryPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamAccessBoundaryPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      rules: cdktf.listMapper(iamAccessBoundaryPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: iamAccessBoundaryPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(iamAccessBoundaryPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamAccessBoundaryPolicyRulesList",
      },
      timeouts: {
        value: iamAccessBoundaryPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamAccessBoundaryPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
