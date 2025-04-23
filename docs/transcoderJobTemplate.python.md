# `transcoderJobTemplate` Submodule <a name="`transcoderJobTemplate` Submodule" id="@cdktf/provider-google.transcoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJobTemplate <a name="TranscoderJobTemplate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_template_id: str,
  location: str,
  config: TranscoderJobTemplateConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: TranscoderJobTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.jobTemplateId">job_template_id</a></code> | <code>str</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.jobTemplateId"></a>

- *Type:* str

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig"></a>

```python
def put_config(
  ad_breaks: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]] = None,
  edit_list: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]] = None,
  elementary_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]] = None,
  encryptions: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]] = None,
  inputs: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]] = None,
  manifests: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]] = None,
  mux_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]] = None,
  output: TranscoderJobTemplateConfigOutput = None,
  overlays: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]] = None,
  pubsub_destination: TranscoderJobTemplateConfigPubsubDestination = None
) -> None
```

###### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.adBreaks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#ad_breaks TranscoderJobTemplate#ad_breaks}

---

###### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.editList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#edit_list TranscoderJobTemplate#edit_list}

---

###### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.elementaryStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

###### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.encryptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#encryptions TranscoderJobTemplate#encryptions}

---

###### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.inputs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

###### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.manifests"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#manifests TranscoderJobTemplate#manifests}

---

###### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.muxStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

###### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#output TranscoderJobTemplate#output}

---

###### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.overlays"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#overlays TranscoderJobTemplate#overlays}

---

###### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#pubsub_destination TranscoderJobTemplate#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranscoderJobTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput">job_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId">job_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config"></a>

```python
config: TranscoderJobTemplateConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts"></a>

```python
timeouts: TranscoderJobTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput"></a>

```python
config_input: TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_template_id_input`<sup>Optional</sup> <a name="job_template_id_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput"></a>

```python
job_template_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, TranscoderJobTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId"></a>

```python
job_template_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobTemplateConfig <a name="TranscoderJobTemplateConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_template_id: str,
  location: str,
  config: TranscoderJobTemplateConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: TranscoderJobTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId">job_template_id</a></code> | <code>str</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location">location</a></code> | <code>str</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_template_id`<sup>Required</sup> <a name="job_template_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId"></a>

```python
job_template_id: str
```

- *Type:* str

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config"></a>

```python
config: TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts"></a>

```python
timeouts: TranscoderJobTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

### TranscoderJobTemplateConfigA <a name="TranscoderJobTemplateConfigA" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigA(
  ad_breaks: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]] = None,
  edit_list: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]] = None,
  elementary_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]] = None,
  encryptions: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]] = None,
  inputs: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]] = None,
  manifests: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]] = None,
  mux_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]] = None,
  output: TranscoderJobTemplateConfigOutput = None,
  overlays: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]] = None,
  pubsub_destination: TranscoderJobTemplateConfigPubsubDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks">ad_breaks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList">edit_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams">elementary_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions">encryptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs">inputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests">manifests</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams">mux_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays">overlays</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks"></a>

```python
ad_breaks: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#ad_breaks TranscoderJobTemplate#ad_breaks}

---

##### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList"></a>

```python
edit_list: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#edit_list TranscoderJobTemplate#edit_list}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```python
elementary_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions"></a>

```python
encryptions: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#encryptions TranscoderJobTemplate#encryptions}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs"></a>

```python
inputs: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests"></a>

```python
manifests: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#manifests TranscoderJobTemplate#manifests}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams"></a>

```python
mux_streams: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output"></a>

```python
output: TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#output TranscoderJobTemplate#output}

---

##### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays"></a>

```python
overlays: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#overlays TranscoderJobTemplate#overlays}

---

##### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```python
pubsub_destination: TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#pubsub_destination TranscoderJobTemplate#pubsub_destination}

---

### TranscoderJobTemplateConfigAdBreaks <a name="TranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks(
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigEditListStruct <a name="TranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct(
  inputs: typing.List[str] = None,
  key: str = None,
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigElementaryStreams <a name="TranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams(
  audio_stream: TranscoderJobTemplateConfigElementaryStreamsAudioStream = None,
  key: str = None,
  video_stream: TranscoderJobTemplateConfigElementaryStreamsVideoStream = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `audio_stream`<sup>Optional</sup> <a name="audio_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```python
audio_stream: TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#audio_stream TranscoderJobTemplate#audio_stream}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `video_stream`<sup>Optional</sup> <a name="video_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```python
video_stream: TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#video_stream TranscoderJobTemplate#video_stream}

---

### TranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream(
  bitrate_bps: typing.Union[int, float],
  channel_count: typing.Union[int, float] = None,
  channel_layout: typing.List[str] = None,
  codec: str = None,
  sample_rate_hertz: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">codec</a></code> | <code>str</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#channel_count TranscoderJobTemplate#channel_count}

---

##### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#channel_layout TranscoderJobTemplate#channel_layout}

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```python
codec: str
```

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#codec TranscoderJobTemplate#codec}

---

##### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#sample_rate_hertz TranscoderJobTemplate#sample_rate_hertz}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream(
  h264: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```python
h264: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#h264 TranscoderJobTemplate#h264}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">gop_duration</a></code> | <code>str</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">pixel_format</a></code> | <code>str</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">preset</a></code> | <code>str</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">profile</a></code> | <code>str</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | The width of the video in pixels. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#frame_rate TranscoderJobTemplate#frame_rate}

---

##### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#crf_level TranscoderJobTemplate#crf_level}

---

##### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#entropy_coder TranscoderJobTemplate#entropy_coder}

---

##### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#gop_duration TranscoderJobTemplate#gop_duration}

---

##### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#height_pixels TranscoderJobTemplate#height_pixels}

---

##### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```python
hlg: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#hlg TranscoderJobTemplate#hlg}

---

##### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#pixel_format TranscoderJobTemplate#pixel_format}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```python
preset: str
```

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#preset TranscoderJobTemplate#preset}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```python
profile: str
```

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#profile TranscoderJobTemplate#profile}

---

##### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#rate_control_mode TranscoderJobTemplate#rate_control_mode}

---

##### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```python
sdr: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#sdr TranscoderJobTemplate#sdr}

---

##### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#vbv_fullness_bits TranscoderJobTemplate#vbv_fullness_bits}

---

##### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#vbv_size_bits TranscoderJobTemplate#vbv_size_bits}

---

##### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#width_pixels TranscoderJobTemplate#width_pixels}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg()
```


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr()
```


### TranscoderJobTemplateConfigEncryptions <a name="TranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions(
  id: str,
  aes128: TranscoderJobTemplateConfigEncryptionsAes128 = None,
  drm_systems: TranscoderJobTemplateConfigEncryptionsDrmSystems = None,
  mpeg_cenc: TranscoderJobTemplateConfigEncryptionsMpegCenc = None,
  sample_aes: TranscoderJobTemplateConfigEncryptionsSampleAes = None,
  secret_manager_key_source: TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id">id</a></code> | <code>str</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aes128`<sup>Optional</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```python
aes128: TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#aes128 TranscoderJobTemplate#aes128}

---

##### `drm_systems`<sup>Optional</sup> <a name="drm_systems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```python
drm_systems: TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#drm_systems TranscoderJobTemplate#drm_systems}

---

##### `mpeg_cenc`<sup>Optional</sup> <a name="mpeg_cenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```python
mpeg_cenc: TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#mpeg_cenc TranscoderJobTemplate#mpeg_cenc}

---

##### `sample_aes`<sup>Optional</sup> <a name="sample_aes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```python
sample_aes: TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#sample_aes TranscoderJobTemplate#sample_aes}

---

##### `secret_manager_key_source`<sup>Optional</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#secret_manager_key_source TranscoderJobTemplate#secret_manager_key_source}

---

### TranscoderJobTemplateConfigEncryptionsAes128 <a name="TranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128()
```


### TranscoderJobTemplateConfigEncryptionsDrmSystems <a name="TranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems(
  clearkey: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay = None,
  playready: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready = None,
  widevine: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```python
clearkey: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#clearkey TranscoderJobTemplate#clearkey}

---

##### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```python
fairplay: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#fairplay TranscoderJobTemplate#fairplay}

---

##### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```python
playready: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#playready TranscoderJobTemplate#playready}

---

##### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```python
widevine: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#widevine TranscoderJobTemplate#widevine}

---

### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey()
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay()
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready()
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine()
```


### TranscoderJobTemplateConfigEncryptionsMpegCenc <a name="TranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc(
  scheme: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">scheme</a></code> | <code>str</code> | Specify the encryption scheme. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#scheme TranscoderJobTemplate#scheme}

---

### TranscoderJobTemplateConfigEncryptionsSampleAes <a name="TranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes()
```


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">secret_version</a></code> | <code>str</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#secret_version TranscoderJobTemplate#secret_version}

---

### TranscoderJobTemplateConfigInputs <a name="TranscoderJobTemplateConfigInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigInputs(
  key: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key">key</a></code> | <code>str</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri">uri</a></code> | <code>str</code> | URI of the media. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigManifests <a name="TranscoderJobTemplateConfigManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigManifests(
  file_name: str = None,
  mux_streams: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type">type</a></code> | <code>str</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#type TranscoderJobTemplate#type}

---

### TranscoderJobTemplateConfigMuxStreams <a name="TranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams(
  container: str = None,
  elementary_streams: typing.List[str] = None,
  encryption_id: str = None,
  file_name: str = None,
  key: str = None,
  segment_settings: TranscoderJobTemplateConfigMuxStreamsSegmentSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container">container</a></code> | <code>str</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId">encryption_id</a></code> | <code>str</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key">key</a></code> | <code>str</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container"></a>

```python
container: str
```

- *Type:* str

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#container TranscoderJobTemplate#container}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `encryption_id`<sup>Optional</sup> <a name="encryption_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#encryption_id TranscoderJobTemplate#encryption_id}

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `segment_settings`<sup>Optional</sup> <a name="segment_settings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```python
segment_settings: TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#segment_settings TranscoderJobTemplate#segment_settings}

---

### TranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings(
  segment_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">segment_duration</a></code> | <code>str</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#segment_duration TranscoderJobTemplate#segment_duration}

---

### TranscoderJobTemplateConfigOutput <a name="TranscoderJobTemplateConfigOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOutput(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri">uri</a></code> | <code>str</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigOverlays <a name="TranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlays(
  animations: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlaysAnimations]] = None,
  image: TranscoderJobTemplateConfigOverlaysImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations">animations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `animations`<sup>Optional</sup> <a name="animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations"></a>

```python
animations: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#animations TranscoderJobTemplate#animations}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image"></a>

```python
image: TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#image TranscoderJobTemplate#image}

---

### TranscoderJobTemplateConfigOverlaysAnimations <a name="TranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations(
  animation_fade: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `animation_fade`<sup>Optional</sup> <a name="animation_fade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```python
animation_fade: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#animation_fade TranscoderJobTemplate#animation_fade}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">fade_type</a></code> | <code>str</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#fade_type TranscoderJobTemplate#fade_type}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#end_time_offset TranscoderJobTemplate#end_time_offset}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

##### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```python
xy: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#xy TranscoderJobTemplate#xy}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">x</a></code> | <code>typing.Union[int, float]</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">y</a></code> | <code>typing.Union[int, float]</code> | Normalized y coordinate. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#x TranscoderJobTemplate#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#y TranscoderJobTemplate#y}

---

### TranscoderJobTemplateConfigOverlaysImage <a name="TranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri">uri</a></code> | <code>str</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigPubsubDestination <a name="TranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination(
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#topic TranscoderJobTemplate#topic}

---

### TranscoderJobTemplateTimeouts <a name="TranscoderJobTemplateTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobTemplateConfigAdBreaksList <a name="TranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]

---


### TranscoderJobTemplateConfigAdBreaksOutputReference <a name="TranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigAdBreaks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]

---


### TranscoderJobTemplateConfigAOutputReference <a name="TranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks">put_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList">put_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams">put_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions">put_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs">put_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests">put_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams">put_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays">put_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks">reset_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList">reset_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions">reset_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests">reset_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays">reset_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">reset_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_breaks` <a name="put_ad_breaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```python
def put_ad_breaks(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]

---

##### `put_edit_list` <a name="put_edit_list" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```python
def put_edit_list(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]

---

##### `put_elementary_streams` <a name="put_elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```python
def put_elementary_streams(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]

---

##### `put_encryptions` <a name="put_encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```python
def put_encryptions(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]

---

##### `put_inputs` <a name="put_inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```python
def put_inputs(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]

---

##### `put_manifests` <a name="put_manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```python
def put_manifests(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]

---

##### `put_mux_streams` <a name="put_mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```python
def put_mux_streams(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]

---

##### `put_output` <a name="put_output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```python
def put_output(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput.parameter.uri"></a>

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

##### `put_overlays` <a name="put_overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```python
def put_overlays(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]

---

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str = None
) -> None
```

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#topic TranscoderJobTemplate#topic}

---

##### `reset_ad_breaks` <a name="reset_ad_breaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```python
def reset_ad_breaks() -> None
```

##### `reset_edit_list` <a name="reset_edit_list" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```python
def reset_edit_list() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryptions` <a name="reset_encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```python
def reset_encryptions() -> None
```

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_manifests` <a name="reset_manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```python
def reset_manifests() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_overlays` <a name="reset_overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```python
def reset_overlays() -> None
```

##### `reset_pubsub_destination` <a name="reset_pubsub_destination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```python
def reset_pubsub_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList">edit_list</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions">encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams">mux_streams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays">overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">ad_breaks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput">edit_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">encryptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput">inputs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput">manifests_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput">output_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput">overlays_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```python
ad_breaks: TranscoderJobTemplateConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a>

---

##### `edit_list`<sup>Required</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```python
edit_list: TranscoderJobTemplateConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a>

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: TranscoderJobTemplateConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `encryptions`<sup>Required</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```python
encryptions: TranscoderJobTemplateConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```python
inputs: TranscoderJobTemplateConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```python
manifests: TranscoderJobTemplateConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a>

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```python
mux_streams: TranscoderJobTemplateConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output"></a>

```python
output: TranscoderJobTemplateConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `overlays`<sup>Required</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```python
overlays: TranscoderJobTemplateConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a>

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: TranscoderJobTemplateConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `ad_breaks_input`<sup>Optional</sup> <a name="ad_breaks_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```python
ad_breaks_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks">TranscoderJobTemplateConfigAdBreaks</a>]]

---

##### `edit_list_input`<sup>Optional</sup> <a name="edit_list_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```python
edit_list_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]

---

##### `encryptions_input`<sup>Optional</sup> <a name="encryptions_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```python
encryptions_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```python
inputs_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]

---

##### `manifests_input`<sup>Optional</sup> <a name="manifests_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```python
manifests_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```python
output_input: TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `overlays_input`<sup>Optional</sup> <a name="overlays_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```python
overlays_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---


### TranscoderJobTemplateConfigEditListStructList <a name="TranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]]

---


### TranscoderJobTemplateConfigEditListStructOutputReference <a name="TranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">inputs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```python
inputs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigEditListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct">TranscoderJobTemplateConfigEditListStruct</a>]

---


### TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">reset_channel_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">reset_channel_layout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">reset_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">reset_sample_rate_hertz</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_count` <a name="reset_channel_count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```python
def reset_channel_count() -> None
```

##### `reset_channel_layout` <a name="reset_channel_layout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```python
def reset_channel_layout() -> None
```

##### `reset_codec` <a name="reset_codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```python
def reset_codec() -> None
```

##### `reset_sample_rate_hertz` <a name="reset_sample_rate_hertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```python
def reset_sample_rate_hertz() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">channel_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">channel_layout_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">sample_rate_hertz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count_input`<sup>Optional</sup> <a name="channel_count_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```python
channel_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout_input`<sup>Optional</sup> <a name="channel_layout_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```python
channel_layout_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec_input`<sup>Optional</sup> <a name="codec_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```python
codec_input: str
```

- *Type:* str

---

##### `sample_rate_hertz_input`<sup>Optional</sup> <a name="sample_rate_hertz_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```python
sample_rate_hertz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count`<sup>Required</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout`<sup>Required</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```python
codec: str
```

- *Type:* str

---

##### `sample_rate_hertz`<sup>Required</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobTemplateConfigElementaryStreamsList <a name="TranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]]

---


### TranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">put_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">put_video_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">reset_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">reset_video_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_stream` <a name="put_audio_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```python
def put_audio_stream(
  bitrate_bps: typing.Union[int, float],
  channel_count: typing.Union[int, float] = None,
  channel_layout: typing.List[str] = None,
  codec: str = None,
  sample_rate_hertz: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

###### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelCount"></a>

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#channel_count TranscoderJobTemplate#channel_count}

---

###### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelLayout"></a>

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#channel_layout TranscoderJobTemplate#channel_layout}

---

###### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.codec"></a>

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#codec TranscoderJobTemplate#codec}

---

###### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.sampleRateHertz"></a>

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#sample_rate_hertz TranscoderJobTemplate#sample_rate_hertz}

---

##### `put_video_stream` <a name="put_video_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```python
def put_video_stream(
  h264: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 = None
) -> None
```

###### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.h264"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#h264 TranscoderJobTemplate#h264}

---

##### `reset_audio_stream` <a name="reset_audio_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```python
def reset_audio_stream() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_video_stream` <a name="reset_video_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```python
def reset_video_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">audio_stream_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">video_stream_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_stream`<sup>Required</sup> <a name="audio_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```python
audio_stream: TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `video_stream`<sup>Required</sup> <a name="video_stream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```python
video_stream: TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `audio_stream_input`<sup>Optional</sup> <a name="audio_stream_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```python
audio_stream_input: TranscoderJobTemplateConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `video_stream_input`<sup>Optional</sup> <a name="video_stream_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```python
video_stream_input: TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigElementaryStreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams">TranscoderJobTemplateConfigElementaryStreams</a>]

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">put_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">put_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">reset_crf_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">reset_entropy_coder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">reset_gop_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">reset_height_pixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">reset_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">reset_pixel_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">reset_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">reset_rate_control_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">reset_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">reset_vbv_fullness_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">reset_vbv_size_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">reset_width_pixels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hlg` <a name="put_hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```python
def put_hlg() -> None
```

##### `put_sdr` <a name="put_sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```python
def put_sdr() -> None
```

##### `reset_crf_level` <a name="reset_crf_level" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```python
def reset_crf_level() -> None
```

##### `reset_entropy_coder` <a name="reset_entropy_coder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```python
def reset_entropy_coder() -> None
```

##### `reset_gop_duration` <a name="reset_gop_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```python
def reset_gop_duration() -> None
```

##### `reset_height_pixels` <a name="reset_height_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```python
def reset_height_pixels() -> None
```

##### `reset_hlg` <a name="reset_hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```python
def reset_hlg() -> None
```

##### `reset_pixel_format` <a name="reset_pixel_format" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```python
def reset_pixel_format() -> None
```

##### `reset_preset` <a name="reset_preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```python
def reset_preset() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_rate_control_mode` <a name="reset_rate_control_mode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```python
def reset_rate_control_mode() -> None
```

##### `reset_sdr` <a name="reset_sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```python
def reset_sdr() -> None
```

##### `reset_vbv_fullness_bits` <a name="reset_vbv_fullness_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```python
def reset_vbv_fullness_bits() -> None
```

##### `reset_vbv_size_bits` <a name="reset_vbv_size_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```python
def reset_vbv_size_bits() -> None
```

##### `reset_width_pixels` <a name="reset_width_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```python
def reset_width_pixels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">crf_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">entropy_coder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">frame_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">gop_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">height_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">hlg_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">pixel_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">preset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">rate_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">sdr_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">vbv_fullness_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">vbv_size_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">width_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">gop_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">pixel_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">preset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hlg`<sup>Required</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```python
hlg: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `sdr`<sup>Required</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```python
sdr: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level_input`<sup>Optional</sup> <a name="crf_level_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```python
crf_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder_input`<sup>Optional</sup> <a name="entropy_coder_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```python
entropy_coder_input: str
```

- *Type:* str

---

##### `frame_rate_input`<sup>Optional</sup> <a name="frame_rate_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```python
frame_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration_input`<sup>Optional</sup> <a name="gop_duration_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```python
gop_duration_input: str
```

- *Type:* str

---

##### `height_pixels_input`<sup>Optional</sup> <a name="height_pixels_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```python
height_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hlg_input`<sup>Optional</sup> <a name="hlg_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```python
hlg_input: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `pixel_format_input`<sup>Optional</sup> <a name="pixel_format_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```python
pixel_format_input: str
```

- *Type:* str

---

##### `preset_input`<sup>Optional</sup> <a name="preset_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```python
preset_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `rate_control_mode_input`<sup>Optional</sup> <a name="rate_control_mode_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```python
rate_control_mode_input: str
```

- *Type:* str

---

##### `sdr_input`<sup>Optional</sup> <a name="sdr_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```python
sdr_input: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `vbv_fullness_bits_input`<sup>Optional</sup> <a name="vbv_fullness_bits_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```python
vbv_fullness_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits_input`<sup>Optional</sup> <a name="vbv_size_bits_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```python
vbv_size_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels_input`<sup>Optional</sup> <a name="width_pixels_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```python
width_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level`<sup>Required</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder`<sup>Required</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration`<sup>Required</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

---

##### `height_pixels`<sup>Required</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pixel_format`<sup>Required</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```python
preset: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `rate_control_mode`<sup>Required</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

---

##### `vbv_fullness_bits`<sup>Required</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits`<sup>Required</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels`<sup>Required</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">put_h264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">reset_h264</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_h264` <a name="put_h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```python
def put_h264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

###### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.frameRate"></a>

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#frame_rate TranscoderJobTemplate#frame_rate}

---

###### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.crfLevel"></a>

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#crf_level TranscoderJobTemplate#crf_level}

---

###### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.entropyCoder"></a>

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#entropy_coder TranscoderJobTemplate#entropy_coder}

---

###### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.gopDuration"></a>

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#gop_duration TranscoderJobTemplate#gop_duration}

---

###### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.heightPixels"></a>

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#height_pixels TranscoderJobTemplate#height_pixels}

---

###### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.hlg"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#hlg TranscoderJobTemplate#hlg}

---

###### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.pixelFormat"></a>

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#pixel_format TranscoderJobTemplate#pixel_format}

---

###### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.preset"></a>

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#preset TranscoderJobTemplate#preset}

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.profile"></a>

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#profile TranscoderJobTemplate#profile}

---

###### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.rateControlMode"></a>

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#rate_control_mode TranscoderJobTemplate#rate_control_mode}

---

###### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.sdr"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#sdr TranscoderJobTemplate#sdr}

---

###### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvFullnessBits"></a>

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#vbv_fullness_bits TranscoderJobTemplate#vbv_fullness_bits}

---

###### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvSizeBits"></a>

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#vbv_size_bits TranscoderJobTemplate#vbv_size_bits}

---

###### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.widthPixels"></a>

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#width_pixels TranscoderJobTemplate#width_pixels}

---

##### `reset_h264` <a name="reset_h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```python
def reset_h264() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">h264_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `h264`<sup>Required</sup> <a name="h264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```python
h264: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `h264_input`<sup>Optional</sup> <a name="h264_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```python
h264_input: TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="TranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">put_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">put_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">put_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">put_widevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">reset_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">reset_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">reset_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">reset_widevine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clearkey` <a name="put_clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```python
def put_clearkey() -> None
```

##### `put_fairplay` <a name="put_fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```python
def put_fairplay() -> None
```

##### `put_playready` <a name="put_playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```python
def put_playready() -> None
```

##### `put_widevine` <a name="put_widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```python
def put_widevine() -> None
```

##### `reset_clearkey` <a name="reset_clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```python
def reset_clearkey() -> None
```

##### `reset_fairplay` <a name="reset_fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```python
def reset_fairplay() -> None
```

##### `reset_playready` <a name="reset_playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```python
def reset_playready() -> None
```

##### `reset_widevine` <a name="reset_widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```python
def reset_widevine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">clearkey_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">fairplay_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">playready_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">widevine_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clearkey`<sup>Required</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```python
clearkey: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `fairplay`<sup>Required</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```python
fairplay: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `playready`<sup>Required</sup> <a name="playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```python
playready: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `widevine`<sup>Required</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```python
widevine: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `clearkey_input`<sup>Optional</sup> <a name="clearkey_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```python
clearkey_input: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `fairplay_input`<sup>Optional</sup> <a name="fairplay_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```python
fairplay_input: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `playready_input`<sup>Optional</sup> <a name="playready_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```python
playready_input: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `widevine_input`<sup>Optional</sup> <a name="widevine_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```python
widevine_input: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobTemplateConfigEncryptionsList <a name="TranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]]

---


### TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### TranscoderJobTemplateConfigEncryptionsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">put_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">put_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">put_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">put_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">put_secret_manager_key_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">reset_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">reset_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">reset_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">reset_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">reset_secret_manager_key_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aes128` <a name="put_aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```python
def put_aes128() -> None
```

##### `put_drm_systems` <a name="put_drm_systems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```python
def put_drm_systems(
  clearkey: TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay = None,
  playready: TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready = None,
  widevine: TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine = None
) -> None
```

###### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.clearkey"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#clearkey TranscoderJobTemplate#clearkey}

---

###### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.fairplay"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#fairplay TranscoderJobTemplate#fairplay}

---

###### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.playready"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#playready TranscoderJobTemplate#playready}

---

###### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.widevine"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#widevine TranscoderJobTemplate#widevine}

---

##### `put_mpeg_cenc` <a name="put_mpeg_cenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```python
def put_mpeg_cenc(
  scheme: str
) -> None
```

###### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.scheme"></a>

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#scheme TranscoderJobTemplate#scheme}

---

##### `put_sample_aes` <a name="put_sample_aes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```python
def put_sample_aes() -> None
```

##### `put_secret_manager_key_source` <a name="put_secret_manager_key_source" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```python
def put_secret_manager_key_source(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.secretVersion"></a>

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#secret_version TranscoderJobTemplate#secret_version}

---

##### `reset_aes128` <a name="reset_aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```python
def reset_aes128() -> None
```

##### `reset_drm_systems` <a name="reset_drm_systems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```python
def reset_drm_systems() -> None
```

##### `reset_mpeg_cenc` <a name="reset_mpeg_cenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```python
def reset_mpeg_cenc() -> None
```

##### `reset_sample_aes` <a name="reset_sample_aes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```python
def reset_sample_aes() -> None
```

##### `reset_secret_manager_key_source` <a name="reset_secret_manager_key_source" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```python
def reset_secret_manager_key_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">aes128_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">drm_systems_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">mpeg_cenc_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">sample_aes_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">secret_manager_key_source_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aes128`<sup>Required</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```python
aes128: TranscoderJobTemplateConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `drm_systems`<sup>Required</sup> <a name="drm_systems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```python
drm_systems: TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `mpeg_cenc`<sup>Required</sup> <a name="mpeg_cenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```python
mpeg_cenc: TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `sample_aes`<sup>Required</sup> <a name="sample_aes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```python
sample_aes: TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `secret_manager_key_source`<sup>Required</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `aes128_input`<sup>Optional</sup> <a name="aes128_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```python
aes128_input: TranscoderJobTemplateConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `drm_systems_input`<sup>Optional</sup> <a name="drm_systems_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```python
drm_systems_input: TranscoderJobTemplateConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mpeg_cenc_input`<sup>Optional</sup> <a name="mpeg_cenc_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```python
mpeg_cenc_input: TranscoderJobTemplateConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `sample_aes_input`<sup>Optional</sup> <a name="sample_aes_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```python
sample_aes_input: TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `secret_manager_key_source_input`<sup>Optional</sup> <a name="secret_manager_key_source_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```python
secret_manager_key_source_input: TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigEncryptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions">TranscoderJobTemplateConfigEncryptions</a>]

---


### TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobTemplateConfigInputsList <a name="TranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]]

---


### TranscoderJobTemplateConfigInputsOutputReference <a name="TranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigInputs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs">TranscoderJobTemplateConfigInputs</a>]

---


### TranscoderJobTemplateConfigManifestsList <a name="TranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]]

---


### TranscoderJobTemplateConfigManifestsOutputReference <a name="TranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigManifests]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests">TranscoderJobTemplateConfigManifests</a>]

---


### TranscoderJobTemplateConfigMuxStreamsList <a name="TranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]]

---


### TranscoderJobTemplateConfigMuxStreamsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">put_segment_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">reset_encryption_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">reset_segment_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segment_settings` <a name="put_segment_settings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```python
def put_segment_settings(
  segment_duration: str = None
) -> None
```

###### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.segmentDuration"></a>

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#segment_duration TranscoderJobTemplate#segment_duration}

---

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryption_id` <a name="reset_encryption_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```python
def reset_encryption_id() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_segment_settings` <a name="reset_segment_settings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```python
def reset_segment_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">encryption_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">segment_settings_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_settings`<sup>Required</sup> <a name="segment_settings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```python
segment_settings: TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id_input`<sup>Optional</sup> <a name="encryption_id_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```python
encryption_id_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `segment_settings_input`<sup>Optional</sup> <a name="segment_settings_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```python
segment_settings_input: TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id`<sup>Required</sup> <a name="encryption_id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigMuxStreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams">TranscoderJobTemplateConfigMuxStreams</a>]

---


### TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">reset_segment_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_segment_duration` <a name="reset_segment_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```python
def reset_segment_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">segment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">segment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_duration_input`<sup>Optional</sup> <a name="segment_duration_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```python
segment_duration_input: str
```

- *Type:* str

---

##### `segment_duration`<sup>Required</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobTemplateConfigOutputOutputReference <a name="TranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">put_xy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">reset_xy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_xy` <a name="put_xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```python
def put_xy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
) -> None
```

###### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.x"></a>

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#x TranscoderJobTemplate#x}

---

###### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.y"></a>

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#y TranscoderJobTemplate#y}

---

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```

##### `reset_xy` <a name="reset_xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```python
def reset_xy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">fade_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">xy_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">fade_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `xy`<sup>Required</sup> <a name="xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```python
xy: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: str
```

- *Type:* str

---

##### `fade_type_input`<sup>Optional</sup> <a name="fade_type_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```python
fade_type_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `xy_input`<sup>Optional</sup> <a name="xy_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```python
xy_input: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">reset_x</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">reset_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x` <a name="reset_x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```python
def reset_x() -> None
```

##### `reset_y` <a name="reset_y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```python
def reset_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_input`<sup>Optional</sup> <a name="x_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```python
x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y_input`<sup>Optional</sup> <a name="y_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```python
y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsList <a name="TranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]

---


### TranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">put_animation_fade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">reset_animation_fade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animation_fade` <a name="put_animation_fade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```python
def put_animation_fade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy = None
) -> None
```

###### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.fadeType"></a>

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#fade_type TranscoderJobTemplate#fade_type}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.endTimeOffset"></a>

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#end_time_offset TranscoderJobTemplate#end_time_offset}

---

###### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.startTimeOffset"></a>

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

###### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.xy"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#xy TranscoderJobTemplate#xy}

---

##### `reset_animation_fade` <a name="reset_animation_fade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```python
def reset_animation_fade() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">animation_fade_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animation_fade`<sup>Required</sup> <a name="animation_fade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```python
animation_fade: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `animation_fade_input`<sup>Optional</sup> <a name="animation_fade_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```python
animation_fade_input: TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigOverlaysAnimations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]

---


### TranscoderJobTemplateConfigOverlaysImageOutputReference <a name="TranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---


### TranscoderJobTemplateConfigOverlaysList <a name="TranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobTemplateConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]]

---


### TranscoderJobTemplateConfigOverlaysOutputReference <a name="TranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">put_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">reset_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animations` <a name="put_animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```python
def put_animations(
  value: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlaysAnimations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]

---

##### `put_image` <a name="put_image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```python
def put_image(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.uri"></a>

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

##### `reset_animations` <a name="reset_animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```python
def reset_animations() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations">animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">animations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">image_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animations`<sup>Required</sup> <a name="animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```python
animations: TranscoderJobTemplateConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```python
image: TranscoderJobTemplateConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `animations_input`<sup>Optional</sup> <a name="animations_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```python
animations_input: typing.Union[IResolvable, typing.List[TranscoderJobTemplateConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations">TranscoderJobTemplateConfigOverlaysAnimations</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```python
image_input: TranscoderJobTemplateConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateConfigOverlays]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays">TranscoderJobTemplateConfigOverlays</a>]

---


### TranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="TranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobTemplateConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---


### TranscoderJobTemplateTimeoutsOutputReference <a name="TranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job_template

transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TranscoderJobTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>]

---



