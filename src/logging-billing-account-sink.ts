// https://www.terraform.io/docs/providers/google/r/logging_billing_account_sink.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingBillingAccountSinkConfig extends TerraformMetaArguments {
  /** The billing account exported to the sink. */
  readonly billingAccount: string;
  /** The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource. */
  readonly destination: string;
  /** The filter to apply when exporting logs. Only log entries that match the filter are exported. */
  readonly filter?: string;
  /** The name of the logging sink. */
  readonly name: string;
  /** bigquery_options block */
  readonly bigqueryOptions?: LoggingBillingAccountSinkBigqueryOptions[];
}
export interface LoggingBillingAccountSinkBigqueryOptions {
  /** Whether to use BigQuery's partition tables. By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone. */
  readonly usePartitionedTables: boolean;
}

// Resource

export class LoggingBillingAccountSink extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingBillingAccountSinkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_billing_account_sink',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._billingAccount = config.billingAccount;
    this._destination = config.destination;
    this._filter = config.filter;
    this._name = config.name;
    this._bigqueryOptions = config.bigqueryOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount: string;
  public get billingAccount() {
    return this._billingAccount;
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }

  // destination - computed: false, optional: false, required: true
  private _destination: string;
  public get destination() {
    return this._destination;
  }
  public set destination(value: string) {
    this._destination = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string | undefined) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // writer_identity - computed: true, optional: false, required: true
  public get writerIdentity() {
    return this.getStringAttribute('writer_identity');
  }

  // bigquery_options - computed: false, optional: true, required: false
  private _bigqueryOptions?: LoggingBillingAccountSinkBigqueryOptions[];
  public get bigqueryOptions() {
    return this._bigqueryOptions;
  }
  public set bigqueryOptions(value: LoggingBillingAccountSinkBigqueryOptions[] | undefined) {
    this._bigqueryOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account: this._billingAccount,
      destination: this._destination,
      filter: this._filter,
      name: this._name,
      bigquery_options: this._bigqueryOptions,
    };
  }
}
