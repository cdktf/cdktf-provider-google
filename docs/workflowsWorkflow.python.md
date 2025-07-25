# `workflowsWorkflow` Submodule <a name="`workflowsWorkflow` Submodule" id="@cdktf/provider-google.workflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowsWorkflow <a name="WorkflowsWorkflow" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  call_log_level: str = None,
  crypto_key_name: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  execution_history_level: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  name_prefix: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  source_contents: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkflowsWorkflowTimeouts = None,
  user_env_vars: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.callLogLevel">call_log_level</a></code> | <code>str</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.executionHistoryLevel">execution_history_level</a></code> | <code>str</code> | Describes the level of execution history to be stored for this workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.sourceContents">source_contents</a></code> | <code>str</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.userEnvVars">user_env_vars</a></code> | <code>typing.Mapping[str]</code> | User-defined environment variables associated with this workflow revision. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `call_log_level`<sup>Optional</sup> <a name="call_log_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.callLogLevel"></a>

- *Type:* str

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#call_log_level WorkflowsWorkflow#call_log_level}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#crypto_key_name WorkflowsWorkflow#crypto_key_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the workflow.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the workflow,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the workflow will fail.
When the field is set to false, deleting the workflow is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#deletion_protection WorkflowsWorkflow#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `execution_history_level`<sup>Optional</sup> <a name="execution_history_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.executionHistoryLevel"></a>

- *Type:* str

Describes the level of execution history to be stored for this workflow.

This configuration
determines how much information about workflow executions is preserved. If not specified,
defaults to EXECUTION_HISTORY_LEVEL_UNSPECIFIED. Possible values: ["EXECUTION_HISTORY_LEVEL_UNSPECIFIED", "EXECUTION_HISTORY_BASIC", "EXECUTION_HISTORY_DETAILED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#execution_history_level WorkflowsWorkflow#execution_history_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.name"></a>

- *Type:* str

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.region"></a>

- *Type:* str

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `source_contents`<sup>Optional</sup> <a name="source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.sourceContents"></a>

- *Type:* str

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition
as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in
the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#tags WorkflowsWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

---

##### `user_env_vars`<sup>Optional</sup> <a name="user_env_vars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.userEnvVars"></a>

- *Type:* typing.Mapping[str]

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with "GOOGLE" or "WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#user_env_vars WorkflowsWorkflow#user_env_vars}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCallLogLevel">reset_call_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetExecutionHistoryLevel">reset_execution_history_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents">reset_source_contents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetUserEnvVars">reset_user_env_vars</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#create WorkflowsWorkflow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#update WorkflowsWorkflow#update}.

---

##### `reset_call_log_level` <a name="reset_call_log_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCallLogLevel"></a>

```python
def reset_call_log_level() -> None
```

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_history_level` <a name="reset_execution_history_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetExecutionHistoryLevel"></a>

```python
def reset_execution_history_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_source_contents` <a name="reset_source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents"></a>

```python
def reset_source_contents() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_env_vars` <a name="reset_user_env_vars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetUserEnvVars"></a>

```python
def reset_user_env_vars() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkflowsWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkflowsWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkflowsWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkflowsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevelInput">call_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.executionHistoryLevelInput">execution_history_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput">source_contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVarsInput">user_env_vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevel">call_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.executionHistoryLevel">execution_history_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents">source_contents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVars">user_env_vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts"></a>

```python
timeouts: WorkflowsWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `call_log_level_input`<sup>Optional</sup> <a name="call_log_level_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevelInput"></a>

```python
call_log_level_input: str
```

- *Type:* str

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_history_level_input`<sup>Optional</sup> <a name="execution_history_level_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.executionHistoryLevelInput"></a>

```python
execution_history_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_contents_input`<sup>Optional</sup> <a name="source_contents_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput"></a>

```python
source_contents_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WorkflowsWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>]

---

##### `user_env_vars_input`<sup>Optional</sup> <a name="user_env_vars_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVarsInput"></a>

```python
user_env_vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `call_log_level`<sup>Required</sup> <a name="call_log_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevel"></a>

```python
call_log_level: str
```

- *Type:* str

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_history_level`<sup>Required</sup> <a name="execution_history_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.executionHistoryLevel"></a>

```python
execution_history_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `source_contents`<sup>Required</sup> <a name="source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents"></a>

```python
source_contents: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_env_vars`<sup>Required</sup> <a name="user_env_vars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVars"></a>

```python
user_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowsWorkflowConfig <a name="WorkflowsWorkflowConfig" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  call_log_level: str = None,
  crypto_key_name: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  execution_history_level: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  name_prefix: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  source_contents: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: WorkflowsWorkflowTimeouts = None,
  user_env_vars: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.callLogLevel">call_log_level</a></code> | <code>str</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description">description</a></code> | <code>str</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.executionHistoryLevel">execution_history_level</a></code> | <code>str</code> | Describes the level of execution history to be stored for this workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name">name</a></code> | <code>str</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region">region</a></code> | <code>str</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents">source_contents</a></code> | <code>str</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.userEnvVars">user_env_vars</a></code> | <code>typing.Mapping[str]</code> | User-defined environment variables associated with this workflow revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `call_log_level`<sup>Optional</sup> <a name="call_log_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.callLogLevel"></a>

```python
call_log_level: str
```

- *Type:* str

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#call_log_level WorkflowsWorkflow#call_log_level}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#crypto_key_name WorkflowsWorkflow#crypto_key_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the workflow.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the workflow,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the workflow will fail.
When the field is set to false, deleting the workflow is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#deletion_protection WorkflowsWorkflow#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `execution_history_level`<sup>Optional</sup> <a name="execution_history_level" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.executionHistoryLevel"></a>

```python
execution_history_level: str
```

- *Type:* str

Describes the level of execution history to be stored for this workflow.

This configuration
determines how much information about workflow executions is preserved. If not specified,
defaults to EXECUTION_HISTORY_LEVEL_UNSPECIFIED. Possible values: ["EXECUTION_HISTORY_LEVEL_UNSPECIFIED", "EXECUTION_HISTORY_BASIC", "EXECUTION_HISTORY_DETAILED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#execution_history_level WorkflowsWorkflow#execution_history_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `source_contents`<sup>Optional</sup> <a name="source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents"></a>

```python
source_contents: str
```

- *Type:* str

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource manager tags.

Resource manager tag keys and values have the same definition
as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in
the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#tags WorkflowsWorkflow#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts"></a>

```python
timeouts: WorkflowsWorkflowTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

---

##### `user_env_vars`<sup>Optional</sup> <a name="user_env_vars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.userEnvVars"></a>

```python
user_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with "GOOGLE" or "WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#user_env_vars WorkflowsWorkflow#user_env_vars}

---

### WorkflowsWorkflowTimeouts <a name="WorkflowsWorkflowTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#create WorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#delete WorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#update WorkflowsWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#create WorkflowsWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/workflows_workflow#update WorkflowsWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowsWorkflowTimeoutsOutputReference <a name="WorkflowsWorkflowTimeoutsOutputReference" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkflowsWorkflowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>]

---



