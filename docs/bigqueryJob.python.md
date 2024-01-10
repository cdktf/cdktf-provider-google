# `bigqueryJob` Submodule <a name="`bigqueryJob` Submodule" id="@cdktf/provider-google.bigqueryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryJob <a name="BigqueryJob" id="@cdktf/provider-google.bigqueryJob.BigqueryJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job google_bigquery_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  copy: BigqueryJobCopy = None,
  extract: BigqueryJobExtract = None,
  id: str = None,
  job_timeout_ms: str = None,
  labels: typing.Mapping[str] = None,
  load: BigqueryJobLoad = None,
  location: str = None,
  project: str = None,
  query: BigqueryJobQuery = None,
  timeouts: BigqueryJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobId"></a>

- *Type:* str

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#job_id BigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.copy"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#copy BigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.extract"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#extract BigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_timeout_ms`<sup>Optional</sup> <a name="job_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.jobTimeoutMs"></a>

- *Type:* str

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#labels BigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.load"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#load BigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.location"></a>

- *Type:* str

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#location BigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project BigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#timeouts BigqueryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy">put_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract">put_extract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad">put_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy">reset_copy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract">reset_extract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs">reset_job_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad">reset_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_copy` <a name="put_copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy"></a>

```python
def put_copy(
  source_tables: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]],
  create_disposition: str = None,
  destination_encryption_configuration: BigqueryJobCopyDestinationEncryptionConfiguration = None,
  destination_table: BigqueryJobCopyDestinationTable = None,
  write_disposition: str = None
) -> None
```

###### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.sourceTables"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_tables BigqueryJob#source_tables}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

###### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putCopy.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

##### `put_extract` <a name="put_extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract"></a>

```python
def put_extract(
  destination_uris: typing.List[str],
  compression: str = None,
  destination_format: str = None,
  field_delimiter: str = None,
  print_header: typing.Union[bool, IResolvable] = None,
  source_model: BigqueryJobExtractSourceModel = None,
  source_table: BigqueryJobExtractSourceTable = None,
  use_avro_logical_types: typing.Union[bool, IResolvable] = None
) -> None
```

###### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.destinationUris"></a>

- *Type:* typing.List[str]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_uris BigqueryJob#destination_uris}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.compression"></a>

- *Type:* str

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#compression BigqueryJob#compression}

---

###### `destination_format`<sup>Optional</sup> <a name="destination_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.destinationFormat"></a>

- *Type:* str

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_format BigqueryJob#destination_format}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.fieldDelimiter"></a>

- *Type:* str

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

###### `print_header`<sup>Optional</sup> <a name="print_header" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.printHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#print_header BigqueryJob#print_header}

---

###### `source_model`<sup>Optional</sup> <a name="source_model" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.sourceModel"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_model BigqueryJob#source_model}

---

###### `source_table`<sup>Optional</sup> <a name="source_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.sourceTable"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_table BigqueryJob#source_table}

---

###### `use_avro_logical_types`<sup>Optional</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putExtract.parameter.useAvroLogicalTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_avro_logical_types BigqueryJob#use_avro_logical_types}

---

##### `put_load` <a name="put_load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad"></a>

```python
def put_load(
  destination_table: BigqueryJobLoadDestinationTable,
  source_uris: typing.List[str],
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  autodetect: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  destination_encryption_configuration: BigqueryJobLoadDestinationEncryptionConfiguration = None,
  encoding: str = None,
  field_delimiter: str = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  max_bad_records: typing.Union[int, float] = None,
  null_marker: str = None,
  parquet_options: BigqueryJobLoadParquetOptions = None,
  projection_fields: typing.List[str] = None,
  quote: str = None,
  schema_update_options: typing.List[str] = None,
  skip_leading_rows: typing.Union[int, float] = None,
  source_format: str = None,
  time_partitioning: BigqueryJobLoadTimePartitioning = None,
  write_disposition: str = None
) -> None
```

###### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

###### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.sourceUris"></a>

- *Type:* typing.List[str]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_uris BigqueryJob#source_uris}

---

###### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.allowJaggedRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_jagged_rows BigqueryJob#allow_jagged_rows}

---

###### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.allowQuotedNewlines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}

---

###### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.autodetect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#autodetect BigqueryJob#autodetect}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.encoding"></a>

- *Type:* str

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#encoding BigqueryJob#encoding}

---

###### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.fieldDelimiter"></a>

- *Type:* str

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

###### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.ignoreUnknownValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#ignore_unknown_values BigqueryJob#ignore_unknown_values}

---

###### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.jsonExtension"></a>

- *Type:* str

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#json_extension BigqueryJob#json_extension}

---

###### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.maxBadRecords"></a>

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#max_bad_records BigqueryJob#max_bad_records}

---

###### `null_marker`<sup>Optional</sup> <a name="null_marker" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.nullMarker"></a>

- *Type:* str

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#null_marker BigqueryJob#null_marker}

---

###### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.parquetOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#parquet_options BigqueryJob#parquet_options}

---

###### `projection_fields`<sup>Optional</sup> <a name="projection_fields" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.projectionFields"></a>

- *Type:* typing.List[str]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#projection_fields BigqueryJob#projection_fields}

---

###### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.quote"></a>

- *Type:* str

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#quote BigqueryJob#quote}

---

###### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.schemaUpdateOptions"></a>

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

###### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.skipLeadingRows"></a>

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#skip_leading_rows BigqueryJob#skip_leading_rows}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.sourceFormat"></a>

- *Type:* str

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_format BigqueryJob#source_format}

---

###### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.timePartitioning"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#time_partitioning BigqueryJob#time_partitioning}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putLoad.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

##### `put_query` <a name="put_query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery"></a>

```python
def put_query(
  query: str,
  allow_large_results: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  default_dataset: BigqueryJobQueryDefaultDataset = None,
  destination_encryption_configuration: BigqueryJobQueryDestinationEncryptionConfiguration = None,
  destination_table: BigqueryJobQueryDestinationTable = None,
  flatten_results: typing.Union[bool, IResolvable] = None,
  maximum_billing_tier: typing.Union[int, float] = None,
  maximum_bytes_billed: str = None,
  parameter_mode: str = None,
  priority: str = None,
  schema_update_options: typing.List[str] = None,
  script_options: BigqueryJobQueryScriptOptions = None,
  use_legacy_sql: typing.Union[bool, IResolvable] = None,
  use_query_cache: typing.Union[bool, IResolvable] = None,
  user_defined_function_resources: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]] = None,
  write_disposition: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.query"></a>

- *Type:* str

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

###### `allow_large_results`<sup>Optional</sup> <a name="allow_large_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.allowLargeResults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_large_results BigqueryJob#allow_large_results}

---

###### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.createDisposition"></a>

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

###### `default_dataset`<sup>Optional</sup> <a name="default_dataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.defaultDataset"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#default_dataset BigqueryJob#default_dataset}

---

###### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.destinationEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

###### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.destinationTable"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

###### `flatten_results`<sup>Optional</sup> <a name="flatten_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.flattenResults"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#flatten_results BigqueryJob#flatten_results}

---

###### `maximum_billing_tier`<sup>Optional</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.maximumBillingTier"></a>

- *Type:* typing.Union[int, float]

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#maximum_billing_tier BigqueryJob#maximum_billing_tier}

---

###### `maximum_bytes_billed`<sup>Optional</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.maximumBytesBilled"></a>

- *Type:* str

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}

---

###### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.parameterMode"></a>

- *Type:* str

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#parameter_mode BigqueryJob#parameter_mode}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.priority"></a>

- *Type:* str

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#priority BigqueryJob#priority}

---

###### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.schemaUpdateOptions"></a>

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

###### `script_options`<sup>Optional</sup> <a name="script_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.scriptOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#script_options BigqueryJob#script_options}

---

###### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.useLegacySql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_legacy_sql BigqueryJob#use_legacy_sql}

---

###### `use_query_cache`<sup>Optional</sup> <a name="use_query_cache" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.useQueryCache"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_query_cache BigqueryJob#use_query_cache}

---

###### `user_defined_function_resources`<sup>Optional</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.userDefinedFunctionResources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#user_defined_function_resources BigqueryJob#user_defined_function_resources}

---

###### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putQuery.parameter.writeDisposition"></a>

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create BigqueryJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#delete BigqueryJob#delete}.

---

##### `reset_copy` <a name="reset_copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetCopy"></a>

```python
def reset_copy() -> None
```

##### `reset_extract` <a name="reset_extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetExtract"></a>

```python
def reset_extract() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_timeout_ms` <a name="reset_job_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetJobTimeoutMs"></a>

```python
def reset_job_timeout_ms() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load` <a name="reset_load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLoad"></a>

```python
def reset_load() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput">copy_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput">extract_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput">job_timeout_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput">load_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy`<sup>Required</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copy"></a>

```python
copy: BigqueryJobCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference">BigqueryJobCopyOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `extract`<sup>Required</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extract"></a>

```python
extract: BigqueryJobExtractOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference">BigqueryJobExtractOutputReference</a>

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.load"></a>

```python
load: BigqueryJobLoadOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference">BigqueryJobLoadOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.query"></a>

```python
query: BigqueryJobQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference">BigqueryJobQueryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.status"></a>

```python
status: BigqueryJobStatusList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList">BigqueryJobStatusList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeouts"></a>

```python
timeouts: BigqueryJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference">BigqueryJobTimeoutsOutputReference</a>

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `copy_input`<sup>Optional</sup> <a name="copy_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.copyInput"></a>

```python
copy_input: BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---

##### `extract_input`<sup>Optional</sup> <a name="extract_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.extractInput"></a>

```python
extract_input: BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `job_timeout_ms_input`<sup>Optional</sup> <a name="job_timeout_ms_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMsInput"></a>

```python
job_timeout_ms_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_input`<sup>Optional</sup> <a name="load_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.loadInput"></a>

```python
load_input: BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.queryInput"></a>

```python
query_input: BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_timeout_ms`<sup>Required</sup> <a name="job_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.jobTimeoutMs"></a>

```python
job_timeout_ms: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryJob.BigqueryJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryJobConfig <a name="BigqueryJobConfig" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_id: str,
  copy: BigqueryJobCopy = None,
  extract: BigqueryJobExtract = None,
  id: str = None,
  job_timeout_ms: str = None,
  labels: typing.Mapping[str] = None,
  load: BigqueryJobLoad = None,
  location: str = None,
  project: str = None,
  query: BigqueryJobQuery = None,
  timeouts: BigqueryJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy">copy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | copy block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract">extract</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | extract block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#id BigqueryJob#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs">job_timeout_ms</a></code> | <code>str</code> | Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load">load</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | load block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location">location</a></code> | <code>str</code> | The geographic location of the job. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project BigqueryJob#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query">query</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

The ID of the job.

The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#job_id BigqueryJob#job_id}

---

##### `copy`<sup>Optional</sup> <a name="copy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.copy"></a>

```python
copy: BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#copy BigqueryJob#copy}

---

##### `extract`<sup>Optional</sup> <a name="extract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.extract"></a>

```python
extract: BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

extract block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#extract BigqueryJob#extract}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#id BigqueryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_timeout_ms`<sup>Optional</sup> <a name="job_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.jobTimeoutMs"></a>

```python
job_timeout_ms: str
```

- *Type:* str

Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#job_timeout_ms BigqueryJob#job_timeout_ms}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#labels BigqueryJob#labels}

---

##### `load`<sup>Optional</sup> <a name="load" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.load"></a>

```python
load: BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

load block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#load BigqueryJob#load}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location of the job. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#location BigqueryJob#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project BigqueryJob#project}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.query"></a>

```python
query: BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobConfig.property.timeouts"></a>

```python
timeouts: BigqueryJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#timeouts BigqueryJob#timeouts}

---

### BigqueryJobCopy <a name="BigqueryJobCopy" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopy(
  source_tables: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]],
  create_disposition: str = None,
  destination_encryption_configuration: BigqueryJobCopyDestinationEncryptionConfiguration = None,
  destination_table: BigqueryJobCopyDestinationTable = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables">source_tables</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]</code> | source_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.sourceTables"></a>

```python
source_tables: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]

source_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_tables BigqueryJob#source_tables}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.destinationTable"></a>

```python
destination_table: BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopy.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobCopyDestinationEncryptionConfiguration <a name="BigqueryJobCopyDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobCopyDestinationTable <a name="BigqueryJobCopyDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopyDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobCopySourceTables <a name="BigqueryJobCopySourceTables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopySourceTables(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtract <a name="BigqueryJobExtract" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtract(
  destination_uris: typing.List[str],
  compression: str = None,
  destination_format: str = None,
  field_delimiter: str = None,
  print_header: typing.Union[bool, IResolvable] = None,
  source_model: BigqueryJobExtractSourceModel = None,
  source_table: BigqueryJobExtractSourceTable = None,
  use_avro_logical_types: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris">destination_uris</a></code> | <code>typing.List[str]</code> | A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression">compression</a></code> | <code>str</code> | The compression type to use for exported files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat">destination_format</a></code> | <code>str</code> | The exported file format. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader">print_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to print out a header row in the results. Default is true. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel">source_model</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | source_model block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable">source_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | source_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use logical types when extracting to AVRO format. |

---

##### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationUris"></a>

```python
destination_uris: typing.List[str]
```

- *Type:* typing.List[str]

A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_uris BigqueryJob#destination_uris}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.compression"></a>

```python
compression: str
```

- *Type:* str

The compression type to use for exported files.

Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#compression BigqueryJob#compression}

---

##### `destination_format`<sup>Optional</sup> <a name="destination_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.destinationFormat"></a>

```python
destination_format: str
```

- *Type:* str

The exported file format.

Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_format BigqueryJob#destination_format}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.

Default is ','

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `print_header`<sup>Optional</sup> <a name="print_header" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.printHeader"></a>

```python
print_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to print out a header row in the results. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#print_header BigqueryJob#print_header}

---

##### `source_model`<sup>Optional</sup> <a name="source_model" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceModel"></a>

```python
source_model: BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

source_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_model BigqueryJob#source_model}

---

##### `source_table`<sup>Optional</sup> <a name="source_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.sourceTable"></a>

```python
source_table: BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

source_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_table BigqueryJob#source_table}

---

##### `use_avro_logical_types`<sup>Optional</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtract.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use logical types when extracting to AVRO format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_avro_logical_types BigqueryJob#use_avro_logical_types}

---

### BigqueryJobExtractSourceModel <a name="BigqueryJobExtractSourceModel" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtractSourceModel(
  dataset_id: str,
  model_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId">model_id</a></code> | <code>str</code> | The ID of the model. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this model. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#model_id BigqueryJob#model_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobExtractSourceTable <a name="BigqueryJobExtractSourceTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtractSourceTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoad <a name="BigqueryJobLoad" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoad(
  destination_table: BigqueryJobLoadDestinationTable,
  source_uris: typing.List[str],
  allow_jagged_rows: typing.Union[bool, IResolvable] = None,
  allow_quoted_newlines: typing.Union[bool, IResolvable] = None,
  autodetect: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  destination_encryption_configuration: BigqueryJobLoadDestinationEncryptionConfiguration = None,
  encoding: str = None,
  field_delimiter: str = None,
  ignore_unknown_values: typing.Union[bool, IResolvable] = None,
  json_extension: str = None,
  max_bad_records: typing.Union[int, float] = None,
  null_marker: str = None,
  parquet_options: BigqueryJobLoadParquetOptions = None,
  projection_fields: typing.List[str] = None,
  quote: str = None,
  schema_update_options: typing.List[str] = None,
  skip_leading_rows: typing.Union[int, float] = None,
  source_format: str = None,
  time_partitioning: BigqueryJobLoadTimePartitioning = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | The fully-qualified URIs that point to your data in Google Cloud. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Accept rows that are missing trailing optional columns. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if we should automatically infer the options and schema for CSV and JSON sources. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | The separator for fields in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if BigQuery should allow extra values that are not represented in the table schema. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension">json_extension</a></code> | <code>str</code> | If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | The maximum number of bad records that BigQuery can ignore when running the job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker">null_marker</a></code> | <code>str</code> | Specifies a string that represents a null value in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | parquet_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields">projection_fields</a></code> | <code>typing.List[str]</code> | If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote">quote</a></code> | <code>str</code> | The value that is used to quote data sections in a CSV file. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows at the top of a CSV file that BigQuery will skip when loading the data. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat">source_format</a></code> | <code>str</code> | The format of the data files. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | time_partitioning block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationTable"></a>

```python
destination_table: BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

The fully-qualified URIs that point to your data in Google Cloud.

For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_uris BigqueryJob#source_uris}

---

##### `allow_jagged_rows`<sup>Optional</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Accept rows that are missing trailing optional columns.

The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_jagged_rows BigqueryJob#allow_jagged_rows}

---

##### `allow_quoted_newlines`<sup>Optional</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_quoted_newlines BigqueryJob#allow_quoted_newlines}

---

##### `autodetect`<sup>Optional</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if we should automatically infer the options and schema for CSV and JSON sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#autodetect BigqueryJob#autodetect}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data.

The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#encoding BigqueryJob#encoding}

---

##### `field_delimiter`<sup>Optional</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

The separator for fields in a CSV file.

The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field_delimiter BigqueryJob#field_delimiter}

---

##### `ignore_unknown_values`<sup>Optional</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if BigQuery should allow extra values that are not represented in the table schema.

If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#ignore_unknown_values BigqueryJob#ignore_unknown_values}

---

##### `json_extension`<sup>Optional</sup> <a name="json_extension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.

For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#json_extension BigqueryJob#json_extension}

---

##### `max_bad_records`<sup>Optional</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of bad records that BigQuery can ignore when running the job.

If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#max_bad_records BigqueryJob#max_bad_records}

---

##### `null_marker`<sup>Optional</sup> <a name="null_marker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.nullMarker"></a>

```python
null_marker: str
```

- *Type:* str

Specifies a string that represents a null value in a CSV file.

For example, if you specify "\N", BigQuery interprets "\N" as a null value
when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#null_marker BigqueryJob#null_marker}

---

##### `parquet_options`<sup>Optional</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.parquetOptions"></a>

```python
parquet_options: BigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

parquet_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#parquet_options BigqueryJob#parquet_options}

---

##### `projection_fields`<sup>Optional</sup> <a name="projection_fields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.projectionFields"></a>

```python
projection_fields: typing.List[str]
```

- *Type:* typing.List[str]

If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.

Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#projection_fields BigqueryJob#projection_fields}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.quote"></a>

```python
quote: str
```

- *Type:* str

The value that is used to quote data sections in a CSV file.

BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#quote BigqueryJob#quote}

---

##### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `skip_leading_rows`<sup>Optional</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows at the top of a CSV file that BigQuery will skip when loading the data.

The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#skip_leading_rows BigqueryJob#skip_leading_rows}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

The format of the data files.

For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#source_format BigqueryJob#source_format}

---

##### `time_partitioning`<sup>Optional</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.timePartitioning"></a>

```python
time_partitioning: BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

time_partitioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#time_partitioning BigqueryJob#time_partitioning}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoad.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobLoadDestinationEncryptionConfiguration <a name="BigqueryJobLoadDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobLoadDestinationTable <a name="BigqueryJobLoadDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobLoadParquetOptions <a name="BigqueryJobLoadParquetOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadParquetOptions(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. |

---

##### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#enable_list_inference BigqueryJob#enable_list_inference}

---

##### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#enum_as_string BigqueryJob#enum_as_string}

---

### BigqueryJobLoadTimePartitioning <a name="BigqueryJobLoadTimePartitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadTimePartitioning(
  type: str,
  expiration_ms: str = None,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type">type</a></code> | <code>str</code> | The only type supported is DAY, which will generate one partition per day. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs">expiration_ms</a></code> | <code>str</code> | Number of milliseconds for which to keep the storage for a partition. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field">field</a></code> | <code>str</code> | If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.type"></a>

```python
type: str
```

- *Type:* str

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#type BigqueryJob#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#expiration_ms BigqueryJob#expiration_ms}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning.property.field"></a>

```python
field: str
```

- *Type:* str

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field BigqueryJob#field}

---

### BigqueryJobQuery <a name="BigqueryJobQuery" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQuery(
  query: str,
  allow_large_results: typing.Union[bool, IResolvable] = None,
  create_disposition: str = None,
  default_dataset: BigqueryJobQueryDefaultDataset = None,
  destination_encryption_configuration: BigqueryJobQueryDestinationEncryptionConfiguration = None,
  destination_table: BigqueryJobQueryDestinationTable = None,
  flatten_results: typing.Union[bool, IResolvable] = None,
  maximum_billing_tier: typing.Union[int, float] = None,
  maximum_bytes_billed: str = None,
  parameter_mode: str = None,
  priority: str = None,
  schema_update_options: typing.List[str] = None,
  script_options: BigqueryJobQueryScriptOptions = None,
  use_legacy_sql: typing.Union[bool, IResolvable] = None,
  use_query_cache: typing.Union[bool, IResolvable] = None,
  user_defined_function_resources: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]] = None,
  write_disposition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query">query</a></code> | <code>str</code> | SQL query text to execute. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults">allow_large_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition">create_disposition</a></code> | <code>str</code> | Specifies whether the job is allowed to create new tables. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset">default_dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | default_dataset block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | destination_encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | destination_table block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults">flatten_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier">maximum_billing_tier</a></code> | <code>typing.Union[int, float]</code> | Limits the billing tier for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled">maximum_bytes_billed</a></code> | <code>str</code> | Limits the bytes billed for this job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode">parameter_mode</a></code> | <code>str</code> | Standard SQL only. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority">priority</a></code> | <code>str</code> | Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | Allows the schema of the destination table to be updated as a side effect of the query job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions">script_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | script_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to use BigQuery's legacy SQL dialect for this query. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache">use_query_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to look for the result in the query cache. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources">user_defined_function_resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | user_defined_function_resources block. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition">write_disposition</a></code> | <code>str</code> | Specifies the action that occurs if the destination table already exists. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.query"></a>

```python
query: str
```

- *Type:* str

SQL query text to execute.

The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#query BigqueryJob#query}

---

##### `allow_large_results`<sup>Optional</sup> <a name="allow_large_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.allowLargeResults"></a>

```python
allow_large_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.

Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
However, you must still set destinationTable when result size exceeds the allowed maximum response size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#allow_large_results BigqueryJob#allow_large_results}

---

##### `create_disposition`<sup>Optional</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

Specifies whether the job is allowed to create new tables.

The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create_disposition BigqueryJob#create_disposition}

---

##### `default_dataset`<sup>Optional</sup> <a name="default_dataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.defaultDataset"></a>

```python
default_dataset: BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

default_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#default_dataset BigqueryJob#default_dataset}

---

##### `destination_encryption_configuration`<sup>Optional</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

destination_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_encryption_configuration BigqueryJob#destination_encryption_configuration}

---

##### `destination_table`<sup>Optional</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.destinationTable"></a>

```python
destination_table: BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#destination_table BigqueryJob#destination_table}

---

##### `flatten_results`<sup>Optional</sup> <a name="flatten_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.flattenResults"></a>

```python
flatten_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.

allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#flatten_results BigqueryJob#flatten_results}

---

##### `maximum_billing_tier`<sup>Optional</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBillingTier"></a>

```python
maximum_billing_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limits the billing tier for this job.

Queries that have resource usage beyond this tier will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#maximum_billing_tier BigqueryJob#maximum_billing_tier}

---

##### `maximum_bytes_billed`<sup>Optional</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.maximumBytesBilled"></a>

```python
maximum_bytes_billed: str
```

- *Type:* str

Limits the bytes billed for this job.

Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
If unspecified, this will be set to your project default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#maximum_bytes_billed BigqueryJob#maximum_bytes_billed}

---

##### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

Standard SQL only.

Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#parameter_mode BigqueryJob#parameter_mode}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.priority"></a>

```python
priority: str
```

- *Type:* str

Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#priority BigqueryJob#priority}

---

##### `schema_update_options`<sup>Optional</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

Allows the schema of the destination table to be updated as a side effect of the query job.

Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#schema_update_options BigqueryJob#schema_update_options}

---

##### `script_options`<sup>Optional</sup> <a name="script_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.scriptOptions"></a>

```python
script_options: BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

script_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#script_options BigqueryJob#script_options}

---

##### `use_legacy_sql`<sup>Optional</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to use BigQuery's legacy SQL dialect for this query.

The default value is true.
If set to false, the query will use BigQuery's standard SQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_legacy_sql BigqueryJob#use_legacy_sql}

---

##### `use_query_cache`<sup>Optional</sup> <a name="use_query_cache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.useQueryCache"></a>

```python
use_query_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to look for the result in the query cache.

The query cache is a best-effort cache that will be flushed whenever
tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#use_query_cache BigqueryJob#use_query_cache}

---

##### `user_defined_function_resources`<sup>Optional</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.userDefinedFunctionResources"></a>

```python
user_defined_function_resources: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]

user_defined_function_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#user_defined_function_resources BigqueryJob#user_defined_function_resources}

---

##### `write_disposition`<sup>Optional</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQuery.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

Specifies the action that occurs if the destination table already exists.

The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#write_disposition BigqueryJob#write_disposition}

---

### BigqueryJobQueryDefaultDataset <a name="BigqueryJobQueryDefaultDataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDefaultDataset(
  dataset_id: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryDestinationEncryptionConfiguration <a name="BigqueryJobQueryDestinationEncryptionConfiguration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

### BigqueryJobQueryDestinationTable <a name="BigqueryJobQueryDestinationTable" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDestinationTable(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId">table_id</a></code> | <code>str</code> | The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

### BigqueryJobQueryScriptOptions <a name="BigqueryJobQueryScriptOptions" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryScriptOptions(
  key_result_statement: str = None,
  statement_byte_budget: str = None,
  statement_timeout_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement">key_result_statement</a></code> | <code>str</code> | Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget">statement_byte_budget</a></code> | <code>str</code> | Limit on the number of bytes billed per statement. Exceeding this budget results in an error. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs">statement_timeout_ms</a></code> | <code>str</code> | Timeout period for each statement in a script. |

---

##### `key_result_statement`<sup>Optional</sup> <a name="key_result_statement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.keyResultStatement"></a>

```python
key_result_statement: str
```

- *Type:* str

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#key_result_statement BigqueryJob#key_result_statement}

---

##### `statement_byte_budget`<sup>Optional</sup> <a name="statement_byte_budget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementByteBudget"></a>

```python
statement_byte_budget: str
```

- *Type:* str

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#statement_byte_budget BigqueryJob#statement_byte_budget}

---

##### `statement_timeout_ms`<sup>Optional</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions.property.statementTimeoutMs"></a>

```python
statement_timeout_ms: str
```

- *Type:* str

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#statement_timeout_ms BigqueryJob#statement_timeout_ms}

---

### BigqueryJobQueryUserDefinedFunctionResources <a name="BigqueryJobQueryUserDefinedFunctionResources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources(
  inline_code: str = None,
  resource_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode">inline_code</a></code> | <code>str</code> | An inline resource that contains code for a user-defined function (UDF). |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri">resource_uri</a></code> | <code>str</code> | A code resource to load from a Google Cloud Storage URI (gs://bucket/path). |

---

##### `inline_code`<sup>Optional</sup> <a name="inline_code" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.inlineCode"></a>

```python
inline_code: str
```

- *Type:* str

An inline resource that contains code for a user-defined function (UDF).

Providing a inline code resource is equivalent to providing a URI for a file containing the same code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#inline_code BigqueryJob#inline_code}

---

##### `resource_uri`<sup>Optional</sup> <a name="resource_uri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

A code resource to load from a Google Cloud Storage URI (gs://bucket/path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#resource_uri BigqueryJob#resource_uri}

---

### BigqueryJobStatus <a name="BigqueryJobStatus" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatus()
```


### BigqueryJobStatusErrorResult <a name="BigqueryJobStatusErrorResult" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrorResult()
```


### BigqueryJobStatusErrors <a name="BigqueryJobStatusErrors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrors()
```


### BigqueryJobTimeouts <a name="BigqueryJobTimeouts" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create BigqueryJob#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#delete BigqueryJob#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#create BigqueryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#delete BigqueryJob#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryJobCopyDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobCopyDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---


### BigqueryJobCopyDestinationTableOutputReference <a name="BigqueryJobCopyDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopyDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---


### BigqueryJobCopyOutputReference <a name="BigqueryJobCopyOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables">put_source_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable">reset_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `put_source_tables` <a name="put_source_tables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables"></a>

```python
def put_source_tables(
  value: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.putSourceTables.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]

---

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_destination_table` <a name="reset_destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetDestinationTable"></a>

```python
def reset_destination_table() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables">source_tables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput">source_tables_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobCopyDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfigurationOutputReference">BigqueryJobCopyDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTable"></a>

```python
destination_table: BigqueryJobCopyDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTableOutputReference">BigqueryJobCopyDestinationTableOutputReference</a>

---

##### `source_tables`<sup>Required</sup> <a name="source_tables" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTables"></a>

```python
source_tables: BigqueryJobCopySourceTablesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList">BigqueryJobCopySourceTablesList</a>

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: BigqueryJobCopyDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationEncryptionConfiguration">BigqueryJobCopyDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: BigqueryJobCopyDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopyDestinationTable">BigqueryJobCopyDestinationTable</a>

---

##### `source_tables_input`<sup>Optional</sup> <a name="source_tables_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.sourceTablesInput"></a>

```python
source_tables_input: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopyOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobCopy
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopy">BigqueryJobCopy</a>

---


### BigqueryJobCopySourceTablesList <a name="BigqueryJobCopySourceTablesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopySourceTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryJobCopySourceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigqueryJobCopySourceTables]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]]

---


### BigqueryJobCopySourceTablesOutputReference <a name="BigqueryJobCopySourceTablesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobCopySourceTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTablesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryJobCopySourceTables]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobCopySourceTables">BigqueryJobCopySourceTables</a>]

---


### BigqueryJobExtractOutputReference <a name="BigqueryJobExtractOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel">put_source_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable">put_source_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat">reset_destination_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader">reset_print_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel">reset_source_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable">reset_source_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes">reset_use_avro_logical_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_model` <a name="put_source_model" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel"></a>

```python
def put_source_model(
  dataset_id: str,
  model_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.modelId"></a>

- *Type:* str

The ID of the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#model_id BigqueryJob#model_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceModel.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `put_source_table` <a name="put_source_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable"></a>

```python
def put_source_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.putSourceTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_destination_format` <a name="reset_destination_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetDestinationFormat"></a>

```python
def reset_destination_format() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_print_header` <a name="reset_print_header" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetPrintHeader"></a>

```python
def reset_print_header() -> None
```

##### `reset_source_model` <a name="reset_source_model" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceModel"></a>

```python
def reset_source_model() -> None
```

##### `reset_source_table` <a name="reset_source_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetSourceTable"></a>

```python
def reset_source_table() -> None
```

##### `reset_use_avro_logical_types` <a name="reset_use_avro_logical_types" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.resetUseAvroLogicalTypes"></a>

```python
def reset_use_avro_logical_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel">source_model</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable">source_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput">destination_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput">destination_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput">print_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput">source_model_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput">source_table_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput">use_avro_logical_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat">destination_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris">destination_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader">print_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes">use_avro_logical_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_model`<sup>Required</sup> <a name="source_model" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModel"></a>

```python
source_model: BigqueryJobExtractSourceModelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference">BigqueryJobExtractSourceModelOutputReference</a>

---

##### `source_table`<sup>Required</sup> <a name="source_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTable"></a>

```python
source_table: BigqueryJobExtractSourceTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference">BigqueryJobExtractSourceTableOutputReference</a>

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `destination_format_input`<sup>Optional</sup> <a name="destination_format_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormatInput"></a>

```python
destination_format_input: str
```

- *Type:* str

---

##### `destination_uris_input`<sup>Optional</sup> <a name="destination_uris_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUrisInput"></a>

```python
destination_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `print_header_input`<sup>Optional</sup> <a name="print_header_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeaderInput"></a>

```python
print_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_model_input`<sup>Optional</sup> <a name="source_model_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceModelInput"></a>

```python
source_model_input: BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---

##### `source_table_input`<sup>Optional</sup> <a name="source_table_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.sourceTableInput"></a>

```python
source_table_input: BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---

##### `use_avro_logical_types_input`<sup>Optional</sup> <a name="use_avro_logical_types_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypesInput"></a>

```python
use_avro_logical_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `destination_format`<sup>Required</sup> <a name="destination_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationFormat"></a>

```python
destination_format: str
```

- *Type:* str

---

##### `destination_uris`<sup>Required</sup> <a name="destination_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.destinationUris"></a>

```python
destination_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `print_header`<sup>Required</sup> <a name="print_header" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.printHeader"></a>

```python
print_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_avro_logical_types`<sup>Required</sup> <a name="use_avro_logical_types" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.useAvroLogicalTypes"></a>

```python
use_avro_logical_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobExtract
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtract">BigqueryJobExtract</a>

---


### BigqueryJobExtractSourceModelOutputReference <a name="BigqueryJobExtractSourceModelOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtractSourceModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModelOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobExtractSourceModel
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceModel">BigqueryJobExtractSourceModel</a>

---


### BigqueryJobExtractSourceTableOutputReference <a name="BigqueryJobExtractSourceTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobExtractSourceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTableOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobExtractSourceTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobExtractSourceTable">BigqueryJobExtractSourceTable</a>

---


### BigqueryJobLoadDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobLoadDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---


### BigqueryJobLoadDestinationTableOutputReference <a name="BigqueryJobLoadDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---


### BigqueryJobLoadOutputReference <a name="BigqueryJobLoadOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions">put_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning">put_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows">reset_allow_jagged_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines">reset_allow_quoted_newlines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect">reset_autodetect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter">reset_field_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues">reset_ignore_unknown_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension">reset_json_extension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords">reset_max_bad_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker">reset_null_marker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions">reset_parquet_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields">reset_projection_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote">reset_quote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions">reset_schema_update_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows">reset_skip_leading_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning">reset_time_partitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `put_parquet_options` <a name="put_parquet_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions"></a>

```python
def put_parquet_options(
  enable_list_inference: typing.Union[bool, IResolvable] = None,
  enum_as_string: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_list_inference`<sup>Optional</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions.parameter.enableListInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#enable_list_inference BigqueryJob#enable_list_inference}

---

###### `enum_as_string`<sup>Optional</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putParquetOptions.parameter.enumAsString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#enum_as_string BigqueryJob#enum_as_string}

---

##### `put_time_partitioning` <a name="put_time_partitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning"></a>

```python
def put_time_partitioning(
  type: str,
  expiration_ms: str = None,
  field: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.type"></a>

- *Type:* str

The only type supported is DAY, which will generate one partition per day.

Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#type BigqueryJob#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.expirationMs"></a>

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

A wrapper is used here because 0 is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#expiration_ms BigqueryJob#expiration_ms}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.putTimePartitioning.parameter.field"></a>

- *Type:* str

If not set, the table is partitioned by pseudo column '_PARTITIONTIME';

if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#field BigqueryJob#field}

---

##### `reset_allow_jagged_rows` <a name="reset_allow_jagged_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowJaggedRows"></a>

```python
def reset_allow_jagged_rows() -> None
```

##### `reset_allow_quoted_newlines` <a name="reset_allow_quoted_newlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAllowQuotedNewlines"></a>

```python
def reset_allow_quoted_newlines() -> None
```

##### `reset_autodetect` <a name="reset_autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetAutodetect"></a>

```python
def reset_autodetect() -> None
```

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_field_delimiter` <a name="reset_field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetFieldDelimiter"></a>

```python
def reset_field_delimiter() -> None
```

##### `reset_ignore_unknown_values` <a name="reset_ignore_unknown_values" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetIgnoreUnknownValues"></a>

```python
def reset_ignore_unknown_values() -> None
```

##### `reset_json_extension` <a name="reset_json_extension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetJsonExtension"></a>

```python
def reset_json_extension() -> None
```

##### `reset_max_bad_records` <a name="reset_max_bad_records" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetMaxBadRecords"></a>

```python
def reset_max_bad_records() -> None
```

##### `reset_null_marker` <a name="reset_null_marker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetNullMarker"></a>

```python
def reset_null_marker() -> None
```

##### `reset_parquet_options` <a name="reset_parquet_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetParquetOptions"></a>

```python
def reset_parquet_options() -> None
```

##### `reset_projection_fields` <a name="reset_projection_fields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetProjectionFields"></a>

```python
def reset_projection_fields() -> None
```

##### `reset_quote` <a name="reset_quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetQuote"></a>

```python
def reset_quote() -> None
```

##### `reset_schema_update_options` <a name="reset_schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSchemaUpdateOptions"></a>

```python
def reset_schema_update_options() -> None
```

##### `reset_skip_leading_rows` <a name="reset_skip_leading_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSkipLeadingRows"></a>

```python
def reset_skip_leading_rows() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```

##### `reset_time_partitioning` <a name="reset_time_partitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetTimePartitioning"></a>

```python
def reset_time_partitioning() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions">parquet_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning">time_partitioning</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput">allow_jagged_rows_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput">allow_quoted_newlines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput">autodetect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput">field_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput">ignore_unknown_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput">json_extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput">max_bad_records_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput">null_marker_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput">parquet_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput">projection_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput">quote_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput">schema_update_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput">skip_leading_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput">source_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput">time_partitioning_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows">allow_jagged_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines">allow_quoted_newlines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect">autodetect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter">field_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues">ignore_unknown_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension">json_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords">max_bad_records</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker">null_marker</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields">projection_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows">skip_leading_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris">source_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobLoadDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfigurationOutputReference">BigqueryJobLoadDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTable"></a>

```python
destination_table: BigqueryJobLoadDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTableOutputReference">BigqueryJobLoadDestinationTableOutputReference</a>

---

##### `parquet_options`<sup>Required</sup> <a name="parquet_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptions"></a>

```python
parquet_options: BigqueryJobLoadParquetOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference">BigqueryJobLoadParquetOptionsOutputReference</a>

---

##### `time_partitioning`<sup>Required</sup> <a name="time_partitioning" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioning"></a>

```python
time_partitioning: BigqueryJobLoadTimePartitioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference">BigqueryJobLoadTimePartitioningOutputReference</a>

---

##### `allow_jagged_rows_input`<sup>Optional</sup> <a name="allow_jagged_rows_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRowsInput"></a>

```python
allow_jagged_rows_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines_input`<sup>Optional</sup> <a name="allow_quoted_newlines_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlinesInput"></a>

```python
allow_quoted_newlines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodetect_input`<sup>Optional</sup> <a name="autodetect_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetectInput"></a>

```python
autodetect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: BigqueryJobLoadDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationEncryptionConfiguration">BigqueryJobLoadDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: BigqueryJobLoadDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadDestinationTable">BigqueryJobLoadDestinationTable</a>

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `field_delimiter_input`<sup>Optional</sup> <a name="field_delimiter_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiterInput"></a>

```python
field_delimiter_input: str
```

- *Type:* str

---

##### `ignore_unknown_values_input`<sup>Optional</sup> <a name="ignore_unknown_values_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValuesInput"></a>

```python
ignore_unknown_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension_input`<sup>Optional</sup> <a name="json_extension_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtensionInput"></a>

```python
json_extension_input: str
```

- *Type:* str

---

##### `max_bad_records_input`<sup>Optional</sup> <a name="max_bad_records_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecordsInput"></a>

```python
max_bad_records_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `null_marker_input`<sup>Optional</sup> <a name="null_marker_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarkerInput"></a>

```python
null_marker_input: str
```

- *Type:* str

---

##### `parquet_options_input`<sup>Optional</sup> <a name="parquet_options_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.parquetOptionsInput"></a>

```python
parquet_options_input: BigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---

##### `projection_fields_input`<sup>Optional</sup> <a name="projection_fields_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFieldsInput"></a>

```python
projection_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_input`<sup>Optional</sup> <a name="quote_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quoteInput"></a>

```python
quote_input: str
```

- *Type:* str

---

##### `schema_update_options_input`<sup>Optional</sup> <a name="schema_update_options_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptionsInput"></a>

```python
schema_update_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_leading_rows_input`<sup>Optional</sup> <a name="skip_leading_rows_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRowsInput"></a>

```python
skip_leading_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `source_uris_input`<sup>Optional</sup> <a name="source_uris_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUrisInput"></a>

```python
source_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_partitioning_input`<sup>Optional</sup> <a name="time_partitioning_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.timePartitioningInput"></a>

```python
time_partitioning_input: BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `allow_jagged_rows`<sup>Required</sup> <a name="allow_jagged_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowJaggedRows"></a>

```python
allow_jagged_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_quoted_newlines`<sup>Required</sup> <a name="allow_quoted_newlines" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.allowQuotedNewlines"></a>

```python
allow_quoted_newlines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autodetect`<sup>Required</sup> <a name="autodetect" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.autodetect"></a>

```python
autodetect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `field_delimiter`<sup>Required</sup> <a name="field_delimiter" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.fieldDelimiter"></a>

```python
field_delimiter: str
```

- *Type:* str

---

##### `ignore_unknown_values`<sup>Required</sup> <a name="ignore_unknown_values" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.ignoreUnknownValues"></a>

```python
ignore_unknown_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_extension`<sup>Required</sup> <a name="json_extension" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.jsonExtension"></a>

```python
json_extension: str
```

- *Type:* str

---

##### `max_bad_records`<sup>Required</sup> <a name="max_bad_records" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.maxBadRecords"></a>

```python
max_bad_records: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `null_marker`<sup>Required</sup> <a name="null_marker" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.nullMarker"></a>

```python
null_marker: str
```

- *Type:* str

---

##### `projection_fields`<sup>Required</sup> <a name="projection_fields" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.projectionFields"></a>

```python
projection_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `schema_update_options`<sup>Required</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_leading_rows`<sup>Required</sup> <a name="skip_leading_rows" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.skipLeadingRows"></a>

```python
skip_leading_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `source_uris`<sup>Required</sup> <a name="source_uris" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.sourceUris"></a>

```python
source_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobLoad
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoad">BigqueryJobLoad</a>

---


### BigqueryJobLoadParquetOptionsOutputReference <a name="BigqueryJobLoadParquetOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference">reset_enable_list_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString">reset_enum_as_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_list_inference` <a name="reset_enable_list_inference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnableListInference"></a>

```python
def reset_enable_list_inference() -> None
```

##### `reset_enum_as_string` <a name="reset_enum_as_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.resetEnumAsString"></a>

```python
def reset_enum_as_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput">enable_list_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput">enum_as_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference">enable_list_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString">enum_as_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_list_inference_input`<sup>Optional</sup> <a name="enable_list_inference_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInferenceInput"></a>

```python
enable_list_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string_input`<sup>Optional</sup> <a name="enum_as_string_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsStringInput"></a>

```python
enum_as_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_list_inference`<sup>Required</sup> <a name="enable_list_inference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enableListInference"></a>

```python
enable_list_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enum_as_string`<sup>Required</sup> <a name="enum_as_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.enumAsString"></a>

```python
enum_as_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobLoadParquetOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadParquetOptions">BigqueryJobLoadParquetOptions</a>

---


### BigqueryJobLoadTimePartitioningOutputReference <a name="BigqueryJobLoadTimePartitioningOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs">reset_expiration_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_ms` <a name="reset_expiration_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetExpirationMs"></a>

```python
def reset_expiration_ms() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput">expiration_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs">expiration_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms_input`<sup>Optional</sup> <a name="expiration_ms_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMsInput"></a>

```python
expiration_ms_input: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioningOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobLoadTimePartitioning
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobLoadTimePartitioning">BigqueryJobLoadTimePartitioning</a>

---


### BigqueryJobQueryDefaultDatasetOutputReference <a name="BigqueryJobQueryDefaultDatasetOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---


### BigqueryJobQueryDestinationEncryptionConfigurationOutputReference <a name="BigqueryJobQueryDestinationEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---


### BigqueryJobQueryDestinationTableOutputReference <a name="BigqueryJobQueryDestinationTableOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryDestinationTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_id` <a name="reset_dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---


### BigqueryJobQueryOutputReference <a name="BigqueryJobQueryOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset">put_default_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration">put_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable">put_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions">put_script_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources">put_user_defined_function_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults">reset_allow_large_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition">reset_create_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset">reset_default_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration">reset_destination_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable">reset_destination_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults">reset_flatten_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier">reset_maximum_billing_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled">reset_maximum_bytes_billed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode">reset_parameter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions">reset_schema_update_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions">reset_script_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql">reset_use_legacy_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache">reset_use_query_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources">reset_user_defined_function_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition">reset_write_disposition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_dataset` <a name="put_default_dataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset"></a>

```python
def put_default_dataset(
  dataset_id: str,
  project_id: str = None
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset.parameter.datasetId"></a>

- *Type:* str

The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDefaultDataset.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `put_destination_encryption_configuration` <a name="put_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration"></a>

```python
def put_destination_encryption_configuration(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationEncryptionConfiguration.parameter.kmsKeyName"></a>

- *Type:* str

Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.

The BigQuery Service Account associated with your project requires access to this encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#kms_key_name BigqueryJob#kms_key_name}

---

##### `put_destination_table` <a name="put_destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable"></a>

```python
def put_destination_table(
  table_id: str,
  dataset_id: str = None,
  project_id: str = None
) -> None
```

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.tableId"></a>

- *Type:* str

The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set, or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#table_id BigqueryJob#table_id}

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#dataset_id BigqueryJob#dataset_id}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putDestinationTable.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#project_id BigqueryJob#project_id}

---

##### `put_script_options` <a name="put_script_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions"></a>

```python
def put_script_options(
  key_result_statement: str = None,
  statement_byte_budget: str = None,
  statement_timeout_ms: str = None
) -> None
```

###### `key_result_statement`<sup>Optional</sup> <a name="key_result_statement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.keyResultStatement"></a>

- *Type:* str

Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job.

Possible values: ["LAST", "FIRST_SELECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#key_result_statement BigqueryJob#key_result_statement}

---

###### `statement_byte_budget`<sup>Optional</sup> <a name="statement_byte_budget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.statementByteBudget"></a>

- *Type:* str

Limit on the number of bytes billed per statement. Exceeding this budget results in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#statement_byte_budget BigqueryJob#statement_byte_budget}

---

###### `statement_timeout_ms`<sup>Optional</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putScriptOptions.parameter.statementTimeoutMs"></a>

- *Type:* str

Timeout period for each statement in a script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_job#statement_timeout_ms BigqueryJob#statement_timeout_ms}

---

##### `put_user_defined_function_resources` <a name="put_user_defined_function_resources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources"></a>

```python
def put_user_defined_function_resources(
  value: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.putUserDefinedFunctionResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]

---

##### `reset_allow_large_results` <a name="reset_allow_large_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetAllowLargeResults"></a>

```python
def reset_allow_large_results() -> None
```

##### `reset_create_disposition` <a name="reset_create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetCreateDisposition"></a>

```python
def reset_create_disposition() -> None
```

##### `reset_default_dataset` <a name="reset_default_dataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDefaultDataset"></a>

```python
def reset_default_dataset() -> None
```

##### `reset_destination_encryption_configuration` <a name="reset_destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationEncryptionConfiguration"></a>

```python
def reset_destination_encryption_configuration() -> None
```

##### `reset_destination_table` <a name="reset_destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetDestinationTable"></a>

```python
def reset_destination_table() -> None
```

##### `reset_flatten_results` <a name="reset_flatten_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetFlattenResults"></a>

```python
def reset_flatten_results() -> None
```

##### `reset_maximum_billing_tier` <a name="reset_maximum_billing_tier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBillingTier"></a>

```python
def reset_maximum_billing_tier() -> None
```

##### `reset_maximum_bytes_billed` <a name="reset_maximum_bytes_billed" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetMaximumBytesBilled"></a>

```python
def reset_maximum_bytes_billed() -> None
```

##### `reset_parameter_mode` <a name="reset_parameter_mode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetParameterMode"></a>

```python
def reset_parameter_mode() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_schema_update_options` <a name="reset_schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetSchemaUpdateOptions"></a>

```python
def reset_schema_update_options() -> None
```

##### `reset_script_options` <a name="reset_script_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetScriptOptions"></a>

```python
def reset_script_options() -> None
```

##### `reset_use_legacy_sql` <a name="reset_use_legacy_sql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseLegacySql"></a>

```python
def reset_use_legacy_sql() -> None
```

##### `reset_use_query_cache` <a name="reset_use_query_cache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUseQueryCache"></a>

```python
def reset_use_query_cache() -> None
```

##### `reset_user_defined_function_resources` <a name="reset_user_defined_function_resources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetUserDefinedFunctionResources"></a>

```python
def reset_user_defined_function_resources() -> None
```

##### `reset_write_disposition` <a name="reset_write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.resetWriteDisposition"></a>

```python
def reset_write_disposition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset">default_dataset</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration">destination_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable">destination_table</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions">script_options</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources">user_defined_function_resources</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput">allow_large_results_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput">create_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput">default_dataset_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput">destination_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput">destination_table_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput">flatten_results_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput">maximum_billing_tier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput">maximum_bytes_billed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput">parameter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput">schema_update_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput">script_options_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput">use_legacy_sql_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput">use_query_cache_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput">user_defined_function_resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput">write_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults">allow_large_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition">create_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults">flatten_results</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier">maximum_billing_tier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled">maximum_bytes_billed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode">parameter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions">schema_update_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql">use_legacy_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache">use_query_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition">write_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_dataset`<sup>Required</sup> <a name="default_dataset" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDataset"></a>

```python
default_dataset: BigqueryJobQueryDefaultDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDatasetOutputReference">BigqueryJobQueryDefaultDatasetOutputReference</a>

---

##### `destination_encryption_configuration`<sup>Required</sup> <a name="destination_encryption_configuration" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfiguration"></a>

```python
destination_encryption_configuration: BigqueryJobQueryDestinationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfigurationOutputReference">BigqueryJobQueryDestinationEncryptionConfigurationOutputReference</a>

---

##### `destination_table`<sup>Required</sup> <a name="destination_table" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTable"></a>

```python
destination_table: BigqueryJobQueryDestinationTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTableOutputReference">BigqueryJobQueryDestinationTableOutputReference</a>

---

##### `script_options`<sup>Required</sup> <a name="script_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptions"></a>

```python
script_options: BigqueryJobQueryScriptOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference">BigqueryJobQueryScriptOptionsOutputReference</a>

---

##### `user_defined_function_resources`<sup>Required</sup> <a name="user_defined_function_resources" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResources"></a>

```python
user_defined_function_resources: BigqueryJobQueryUserDefinedFunctionResourcesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList">BigqueryJobQueryUserDefinedFunctionResourcesList</a>

---

##### `allow_large_results_input`<sup>Optional</sup> <a name="allow_large_results_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResultsInput"></a>

```python
allow_large_results_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition_input`<sup>Optional</sup> <a name="create_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDispositionInput"></a>

```python
create_disposition_input: str
```

- *Type:* str

---

##### `default_dataset_input`<sup>Optional</sup> <a name="default_dataset_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.defaultDatasetInput"></a>

```python
default_dataset_input: BigqueryJobQueryDefaultDataset
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDefaultDataset">BigqueryJobQueryDefaultDataset</a>

---

##### `destination_encryption_configuration_input`<sup>Optional</sup> <a name="destination_encryption_configuration_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationEncryptionConfigurationInput"></a>

```python
destination_encryption_configuration_input: BigqueryJobQueryDestinationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationEncryptionConfiguration">BigqueryJobQueryDestinationEncryptionConfiguration</a>

---

##### `destination_table_input`<sup>Optional</sup> <a name="destination_table_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.destinationTableInput"></a>

```python
destination_table_input: BigqueryJobQueryDestinationTable
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryDestinationTable">BigqueryJobQueryDestinationTable</a>

---

##### `flatten_results_input`<sup>Optional</sup> <a name="flatten_results_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResultsInput"></a>

```python
flatten_results_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_billing_tier_input`<sup>Optional</sup> <a name="maximum_billing_tier_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTierInput"></a>

```python
maximum_billing_tier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_billed_input`<sup>Optional</sup> <a name="maximum_bytes_billed_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilledInput"></a>

```python
maximum_bytes_billed_input: str
```

- *Type:* str

---

##### `parameter_mode_input`<sup>Optional</sup> <a name="parameter_mode_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterModeInput"></a>

```python
parameter_mode_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `schema_update_options_input`<sup>Optional</sup> <a name="schema_update_options_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptionsInput"></a>

```python
schema_update_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_options_input`<sup>Optional</sup> <a name="script_options_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.scriptOptionsInput"></a>

```python
script_options_input: BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---

##### `use_legacy_sql_input`<sup>Optional</sup> <a name="use_legacy_sql_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySqlInput"></a>

```python
use_legacy_sql_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_query_cache_input`<sup>Optional</sup> <a name="use_query_cache_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCacheInput"></a>

```python
use_query_cache_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_defined_function_resources_input`<sup>Optional</sup> <a name="user_defined_function_resources_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.userDefinedFunctionResourcesInput"></a>

```python
user_defined_function_resources_input: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]

---

##### `write_disposition_input`<sup>Optional</sup> <a name="write_disposition_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDispositionInput"></a>

```python
write_disposition_input: str
```

- *Type:* str

---

##### `allow_large_results`<sup>Required</sup> <a name="allow_large_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.allowLargeResults"></a>

```python
allow_large_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_disposition`<sup>Required</sup> <a name="create_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.createDisposition"></a>

```python
create_disposition: str
```

- *Type:* str

---

##### `flatten_results`<sup>Required</sup> <a name="flatten_results" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.flattenResults"></a>

```python
flatten_results: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_billing_tier`<sup>Required</sup> <a name="maximum_billing_tier" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBillingTier"></a>

```python
maximum_billing_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_bytes_billed`<sup>Required</sup> <a name="maximum_bytes_billed" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.maximumBytesBilled"></a>

```python
maximum_bytes_billed: str
```

- *Type:* str

---

##### `parameter_mode`<sup>Required</sup> <a name="parameter_mode" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `schema_update_options`<sup>Required</sup> <a name="schema_update_options" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.schemaUpdateOptions"></a>

```python
schema_update_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_legacy_sql`<sup>Required</sup> <a name="use_legacy_sql" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useLegacySql"></a>

```python
use_legacy_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_query_cache`<sup>Required</sup> <a name="use_query_cache" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.useQueryCache"></a>

```python
use_query_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_disposition`<sup>Required</sup> <a name="write_disposition" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.writeDisposition"></a>

```python
write_disposition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobQuery
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQuery">BigqueryJobQuery</a>

---


### BigqueryJobQueryScriptOptionsOutputReference <a name="BigqueryJobQueryScriptOptionsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement">reset_key_result_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget">reset_statement_byte_budget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs">reset_statement_timeout_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_result_statement` <a name="reset_key_result_statement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetKeyResultStatement"></a>

```python
def reset_key_result_statement() -> None
```

##### `reset_statement_byte_budget` <a name="reset_statement_byte_budget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementByteBudget"></a>

```python
def reset_statement_byte_budget() -> None
```

##### `reset_statement_timeout_ms` <a name="reset_statement_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.resetStatementTimeoutMs"></a>

```python
def reset_statement_timeout_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput">key_result_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput">statement_byte_budget_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput">statement_timeout_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement">key_result_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget">statement_byte_budget</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs">statement_timeout_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_result_statement_input`<sup>Optional</sup> <a name="key_result_statement_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatementInput"></a>

```python
key_result_statement_input: str
```

- *Type:* str

---

##### `statement_byte_budget_input`<sup>Optional</sup> <a name="statement_byte_budget_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudgetInput"></a>

```python
statement_byte_budget_input: str
```

- *Type:* str

---

##### `statement_timeout_ms_input`<sup>Optional</sup> <a name="statement_timeout_ms_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMsInput"></a>

```python
statement_timeout_ms_input: str
```

- *Type:* str

---

##### `key_result_statement`<sup>Required</sup> <a name="key_result_statement" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.keyResultStatement"></a>

```python
key_result_statement: str
```

- *Type:* str

---

##### `statement_byte_budget`<sup>Required</sup> <a name="statement_byte_budget" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementByteBudget"></a>

```python
statement_byte_budget: str
```

- *Type:* str

---

##### `statement_timeout_ms`<sup>Required</sup> <a name="statement_timeout_ms" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.statementTimeoutMs"></a>

```python
statement_timeout_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobQueryScriptOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryScriptOptions">BigqueryJobQueryScriptOptions</a>

---


### BigqueryJobQueryUserDefinedFunctionResourcesList <a name="BigqueryJobQueryUserDefinedFunctionResourcesList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryJobQueryUserDefinedFunctionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigqueryJobQueryUserDefinedFunctionResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]]

---


### BigqueryJobQueryUserDefinedFunctionResourcesOutputReference <a name="BigqueryJobQueryUserDefinedFunctionResourcesOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode">reset_inline_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri">reset_resource_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inline_code` <a name="reset_inline_code" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetInlineCode"></a>

```python
def reset_inline_code() -> None
```

##### `reset_resource_uri` <a name="reset_resource_uri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.resetResourceUri"></a>

```python
def reset_resource_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput">inline_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode">inline_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_code_input`<sup>Optional</sup> <a name="inline_code_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCodeInput"></a>

```python
inline_code_input: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `inline_code`<sup>Required</sup> <a name="inline_code" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.inlineCode"></a>

```python
inline_code: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryJobQueryUserDefinedFunctionResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobQueryUserDefinedFunctionResources">BigqueryJobQueryUserDefinedFunctionResources</a>]

---


### BigqueryJobStatusErrorResultList <a name="BigqueryJobStatusErrorResultList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrorResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryJobStatusErrorResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryJobStatusErrorResultOutputReference <a name="BigqueryJobStatusErrorResultOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrorResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobStatusErrorResult
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResult">BigqueryJobStatusErrorResult</a>

---


### BigqueryJobStatusErrorsList <a name="BigqueryJobStatusErrorsList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryJobStatusErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryJobStatusErrorsOutputReference <a name="BigqueryJobStatusErrorsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobStatusErrors
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrors">BigqueryJobStatusErrors</a>

---


### BigqueryJobStatusList <a name="BigqueryJobStatusList" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryJobStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryJobStatusOutputReference <a name="BigqueryJobStatusOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult">error_result</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_result`<sup>Required</sup> <a name="error_result" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errorResult"></a>

```python
error_result: BigqueryJobStatusErrorResultList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorResultList">BigqueryJobStatusErrorResultList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.errors"></a>

```python
errors: BigqueryJobStatusErrorsList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatusErrorsList">BigqueryJobStatusErrorsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobStatusOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryJobStatus
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobStatus">BigqueryJobStatus</a>

---


### BigqueryJobTimeoutsOutputReference <a name="BigqueryJobTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_job

bigqueryJob.BigqueryJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryJob.BigqueryJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryJob.BigqueryJobTimeouts">BigqueryJobTimeouts</a>]

---



