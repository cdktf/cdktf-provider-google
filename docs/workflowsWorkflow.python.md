# `google_workflows_workflow`

Refer to the Terraform Registory for docs: [`google_workflows_workflow`](https://www.terraform.io/docs/providers/google/r/workflows_workflow).

# `workflowsWorkflow` Submodule <a name="`workflowsWorkflow` Submodule" id="@cdktf/provider-google.workflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowsWorkflow <a name="WorkflowsWorkflow" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import workflows_workflow

workflowsWorkflow.WorkflowsWorkflow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  name_prefix: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  source_contents: str = None,
  timeouts: WorkflowsWorkflowTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.sourceContents">source_contents</a></code> | <code>str</code> | Workflow code to be executed. The size limit is 32KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |

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

- *Type:* typing.Union[int, float]

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

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.name"></a>

- *Type:* str

Name of the Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.region"></a>

- *Type:* str

The region of the workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.

Format: projects/{project}/serviceAccounts/{account}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `source_contents`<sup>Optional</sup> <a name="source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.sourceContents"></a>

- *Type:* str

Workflow code to be executed. The size limit is 32KB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents">reset_source_contents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts">reset_timeouts</a></code> | *No description.* |

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

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

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

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#create WorkflowsWorkflow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#update WorkflowsWorkflow#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription"></a>

```python
def reset_description() -> None
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

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

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
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput">source_contents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents">source_contents</a></code> | <code>str</code> | *No description.* |

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
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput"></a>

```python
description_input: str
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

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[WorkflowsWorkflowTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description"></a>

```python
description: str
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
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  name_prefix: str = None,
  project: str = None,
  region: str = None,
  service_account: str = None,
  source_contents: str = None,
  timeouts: WorkflowsWorkflowTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description">description</a></code> | <code>str</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name">name</a></code> | <code>str</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region">region</a></code> | <code>str</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents">source_contents</a></code> | <code>str</code> | Workflow code to be executed. The size limit is 32KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.

Format: projects/{project}/serviceAccounts/{account}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `source_contents`<sup>Optional</sup> <a name="source_contents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents"></a>

```python
source_contents: str
```

- *Type:* str

Workflow code to be executed. The size limit is 32KB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts"></a>

```python
timeouts: WorkflowsWorkflowTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

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
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#create WorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#delete WorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#update WorkflowsWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#create WorkflowsWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#update WorkflowsWorkflow#update}.

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
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

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
internal_value: typing.Union[WorkflowsWorkflowTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>, cdktf.IResolvable]

---



