// https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubSubscriptionIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#member PubsubSubscriptionIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#project PubsubSubscriptionIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#role PubsubSubscriptionIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#subscription PubsubSubscriptionIamMember#subscription}
  */
  readonly subscription: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#condition PubsubSubscriptionIamMember#condition}
  */
  readonly condition?: PubsubSubscriptionIamMemberCondition[];
}
export interface PubsubSubscriptionIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#description PubsubSubscriptionIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#expression PubsubSubscriptionIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html#title PubsubSubscriptionIamMember#title}
  */
  readonly title: string;
}

function pubsubSubscriptionIamMemberConditionToTerraform(struct?: PubsubSubscriptionIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html google_pubsub_subscription_iam_member}
*/
export class PubsubSubscriptionIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_member.html google_pubsub_subscription_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubSubscriptionIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubSubscriptionIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._subscription = config.subscription;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
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
    return this._project
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription: string;
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: PubsubSubscriptionIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: PubsubSubscriptionIamMemberCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      subscription: cdktf.stringToTerraform(this._subscription),
      condition: cdktf.listMapper(pubsubSubscriptionIamMemberConditionToTerraform)(this._condition),
    };
  }
}
