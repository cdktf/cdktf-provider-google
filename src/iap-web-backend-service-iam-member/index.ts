// https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapWebBackendServiceIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#id IapWebBackendServiceIamMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#member IapWebBackendServiceIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#project IapWebBackendServiceIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#role IapWebBackendServiceIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#web_backend_service IapWebBackendServiceIamMember#web_backend_service}
  */
  readonly webBackendService: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#condition IapWebBackendServiceIamMember#condition}
  */
  readonly condition?: IapWebBackendServiceIamMemberCondition;
}
export interface IapWebBackendServiceIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#description IapWebBackendServiceIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#expression IapWebBackendServiceIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member#title IapWebBackendServiceIamMember#title}
  */
  readonly title: string;
}

export function iapWebBackendServiceIamMemberConditionToTerraform(struct?: IapWebBackendServiceIamMemberConditionOutputReference | IapWebBackendServiceIamMemberCondition): any {
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

export class IapWebBackendServiceIamMemberConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapWebBackendServiceIamMemberCondition | undefined {
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

  public set internalValue(value: IapWebBackendServiceIamMemberCondition | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member google_iap_web_backend_service_iam_member}
*/
export class IapWebBackendServiceIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_web_backend_service_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/iap_web_backend_service_iam_member google_iap_web_backend_service_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapWebBackendServiceIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: IapWebBackendServiceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_backend_service_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.62.1',
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
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._webBackendService = config.webBackendService;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // web_backend_service - computed: false, optional: false, required: true
  private _webBackendService?: string; 
  public get webBackendService() {
    return this.getStringAttribute('web_backend_service');
  }
  public set webBackendService(value: string) {
    this._webBackendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webBackendServiceInput() {
    return this._webBackendService;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new IapWebBackendServiceIamMemberConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: IapWebBackendServiceIamMemberCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      web_backend_service: cdktf.stringToTerraform(this._webBackendService),
      condition: iapWebBackendServiceIamMemberConditionToTerraform(this._condition.internalValue),
    };
  }
}
