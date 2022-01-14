// https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubSubscriptionIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}
  */
  readonly subscription: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy google_pubsub_subscription_iam_policy}
*/
export class PubsubSubscriptionIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_pubsub_subscription_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_policy google_pubsub_subscription_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubSubscriptionIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubSubscriptionIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyData = config.policyData;
    this._project = config.project;
    this._subscription = config.subscription;
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
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

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      subscription: cdktf.stringToTerraform(this._subscription),
    };
  }
}
