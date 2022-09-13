// https://www.terraform.io/docs/providers/google/d/iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#id DataGoogleIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * audit_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_config DataGoogleIamPolicy#audit_config}
  */
  readonly auditConfig?: DataGoogleIamPolicyAuditConfig[] | cdktf.IResolvable;
  /**
  * binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#binding DataGoogleIamPolicy#binding}
  */
  readonly binding?: DataGoogleIamPolicyBinding[] | cdktf.IResolvable;
}
export interface DataGoogleIamPolicyAuditConfigAuditLogConfigs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}
  */
  readonly exemptedMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#log_type DataGoogleIamPolicy#log_type}
  */
  readonly logType: string;
}

export function dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform(struct?: DataGoogleIamPolicyAuditConfigAuditLogConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempted_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptedMembers),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export class DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamPolicyAuditConfigAuditLogConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exemptedMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptedMembers = this._exemptedMembers;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamPolicyAuditConfigAuditLogConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exemptedMembers = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exemptedMembers = value.exemptedMembers;
      this._logType = value.logType;
    }
  }

  // exempted_members - computed: false, optional: true, required: false
  private _exemptedMembers?: string[]; 
  public get exemptedMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('exempted_members'));
  }
  public set exemptedMembers(value: string[]) {
    this._exemptedMembers = value;
  }
  public resetExemptedMembers() {
    this._exemptedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptedMembersInput() {
    return this._exemptedMembers;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class DataGoogleIamPolicyAuditConfigAuditLogConfigsList extends cdktf.ComplexList {
  public internalValue? : DataGoogleIamPolicyAuditConfigAuditLogConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference {
    return new DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamPolicyAuditConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#service DataGoogleIamPolicy#service}
  */
  readonly service: string;
  /**
  * audit_log_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_log_configs DataGoogleIamPolicy#audit_log_configs}
  */
  readonly auditLogConfigs: DataGoogleIamPolicyAuditConfigAuditLogConfigs[] | cdktf.IResolvable;
}

export function dataGoogleIamPolicyAuditConfigToTerraform(struct?: DataGoogleIamPolicyAuditConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    audit_log_configs: cdktf.listMapper(dataGoogleIamPolicyAuditConfigAuditLogConfigsToTerraform, true)(struct!.auditLogConfigs),
  }
}

export class DataGoogleIamPolicyAuditConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamPolicyAuditConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._auditLogConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogConfigs = this._auditLogConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamPolicyAuditConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
      this._auditLogConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
      this._auditLogConfigs.internalValue = value.auditLogConfigs;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // audit_log_configs - computed: false, optional: false, required: true
  private _auditLogConfigs = new DataGoogleIamPolicyAuditConfigAuditLogConfigsList(this, "audit_log_configs", true);
  public get auditLogConfigs() {
    return this._auditLogConfigs;
  }
  public putAuditLogConfigs(value: DataGoogleIamPolicyAuditConfigAuditLogConfigs[] | cdktf.IResolvable) {
    this._auditLogConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigsInput() {
    return this._auditLogConfigs.internalValue;
  }
}

export class DataGoogleIamPolicyAuditConfigList extends cdktf.ComplexList {
  public internalValue? : DataGoogleIamPolicyAuditConfig[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleIamPolicyAuditConfigOutputReference {
    return new DataGoogleIamPolicyAuditConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamPolicyBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#description DataGoogleIamPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#expression DataGoogleIamPolicy#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#title DataGoogleIamPolicy#title}
  */
  readonly title: string;
}

export function dataGoogleIamPolicyBindingConditionToTerraform(struct?: DataGoogleIamPolicyBindingConditionOutputReference | DataGoogleIamPolicyBindingCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class DataGoogleIamPolicyBindingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataGoogleIamPolicyBindingCondition | undefined {
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
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamPolicyBindingCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataGoogleIamPolicyBinding {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#members DataGoogleIamPolicy#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#role DataGoogleIamPolicy#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#condition DataGoogleIamPolicy#condition}
  */
  readonly condition?: DataGoogleIamPolicyBindingCondition;
}

export function dataGoogleIamPolicyBindingToTerraform(struct?: DataGoogleIamPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    role: cdktf.stringToTerraform(struct!.role),
    condition: dataGoogleIamPolicyBindingConditionToTerraform(struct!.condition),
  }
}

export class DataGoogleIamPolicyBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamPolicyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamPolicyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._members = undefined;
      this._role = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._members = value.members;
      this._role = value.role;
      this._condition.internalValue = value.condition;
    }
  }

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataGoogleIamPolicyBindingConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataGoogleIamPolicyBindingCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class DataGoogleIamPolicyBindingList extends cdktf.ComplexList {
  public internalValue? : DataGoogleIamPolicyBinding[] | cdktf.IResolvable

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
  public get(index: number): DataGoogleIamPolicyBindingOutputReference {
    return new DataGoogleIamPolicyBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_policy google_iam_policy}
*/
export class DataGoogleIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iam_policy google_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._auditConfig.internalValue = config.auditConfig;
    this._binding.internalValue = config.binding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // audit_config - computed: false, optional: true, required: false
  private _auditConfig = new DataGoogleIamPolicyAuditConfigList(this, "audit_config", true);
  public get auditConfig() {
    return this._auditConfig;
  }
  public putAuditConfig(value: DataGoogleIamPolicyAuditConfig[] | cdktf.IResolvable) {
    this._auditConfig.internalValue = value;
  }
  public resetAuditConfig() {
    this._auditConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditConfigInput() {
    return this._auditConfig.internalValue;
  }

  // binding - computed: false, optional: true, required: false
  private _binding = new DataGoogleIamPolicyBindingList(this, "binding", true);
  public get binding() {
    return this._binding;
  }
  public putBinding(value: DataGoogleIamPolicyBinding[] | cdktf.IResolvable) {
    this._binding.internalValue = value;
  }
  public resetBinding() {
    this._binding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      audit_config: cdktf.listMapper(dataGoogleIamPolicyAuditConfigToTerraform, true)(this._auditConfig.internalValue),
      binding: cdktf.listMapper(dataGoogleIamPolicyBindingToTerraform, true)(this._binding.internalValue),
    };
  }
}
