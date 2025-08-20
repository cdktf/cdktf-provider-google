/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapWebRegionBackendServiceIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}
  */
  readonly webRegionBackendService: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#condition IapWebRegionBackendServiceIamMember#condition}
  */
  readonly condition?: IapWebRegionBackendServiceIamMemberCondition;
}
export interface IapWebRegionBackendServiceIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#description IapWebRegionBackendServiceIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#expression IapWebRegionBackendServiceIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#title IapWebRegionBackendServiceIamMember#title}
  */
  readonly title: string;
}

export function iapWebRegionBackendServiceIamMemberConditionToTerraform(struct?: IapWebRegionBackendServiceIamMemberConditionOutputReference | IapWebRegionBackendServiceIamMemberCondition): any {
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


export function iapWebRegionBackendServiceIamMemberConditionToHclTerraform(struct?: IapWebRegionBackendServiceIamMemberConditionOutputReference | IapWebRegionBackendServiceIamMemberCondition): any {
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

export class IapWebRegionBackendServiceIamMemberConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IapWebRegionBackendServiceIamMemberCondition | undefined {
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

  public set internalValue(value: IapWebRegionBackendServiceIamMemberCondition | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member google_iap_web_region_backend_service_iam_member}
*/
export class IapWebRegionBackendServiceIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_web_region_backend_service_iam_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IapWebRegionBackendServiceIamMember to import
  * @param importFromId The id of the existing IapWebRegionBackendServiceIamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IapWebRegionBackendServiceIamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iap_web_region_backend_service_iam_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/iap_web_region_backend_service_iam_member google_iap_web_region_backend_service_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapWebRegionBackendServiceIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: IapWebRegionBackendServiceIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_region_backend_service_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.0',
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
    this._id = config.id;
    this._member = config.member;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._webRegionBackendService = config.webRegionBackendService;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // web_region_backend_service - computed: false, optional: false, required: true
  private _webRegionBackendService?: string; 
  public get webRegionBackendService() {
    return this.getStringAttribute('web_region_backend_service');
  }
  public set webRegionBackendService(value: string) {
    this._webRegionBackendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webRegionBackendServiceInput() {
    return this._webRegionBackendService;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new IapWebRegionBackendServiceIamMemberConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: IapWebRegionBackendServiceIamMemberCondition) {
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
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      web_region_backend_service: cdktf.stringToTerraform(this._webRegionBackendService),
      condition: iapWebRegionBackendServiceIamMemberConditionToTerraform(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_region_backend_service: {
        value: cdktf.stringToHclTerraform(this._webRegionBackendService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: iapWebRegionBackendServiceIamMemberConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IapWebRegionBackendServiceIamMemberConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
