# `transcoderJob` Submodule <a name="`transcoderJob` Submodule" id="@cdktf/provider-google.transcoderJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJob <a name="TranscoderJob" id="@cdktf/provider-google.transcoderJob.TranscoderJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job google_transcoder_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  config: TranscoderJobConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_id: str = None,
  timeouts: TranscoderJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.location"></a>

- *Type:* str

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#location TranscoderJob#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#config TranscoderJob#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#labels TranscoderJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.templateId"></a>

- *Type:* str

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#template_id TranscoderJob#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#timeouts TranscoderJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig"></a>

```python
def put_config(
  ad_breaks: IResolvable | typing.List[TranscoderJobConfigAdBreaks] = None,
  edit_list: IResolvable | typing.List[TranscoderJobConfigEditListStruct] = None,
  elementary_streams: IResolvable | typing.List[TranscoderJobConfigElementaryStreams] = None,
  encryptions: IResolvable | typing.List[TranscoderJobConfigEncryptions] = None,
  inputs: IResolvable | typing.List[TranscoderJobConfigInputs] = None,
  manifests: IResolvable | typing.List[TranscoderJobConfigManifests] = None,
  mux_streams: IResolvable | typing.List[TranscoderJobConfigMuxStreams] = None,
  output: TranscoderJobConfigOutput = None,
  overlays: IResolvable | typing.List[TranscoderJobConfigOverlays] = None,
  pubsub_destination: TranscoderJobConfigPubsubDestination = None
) -> None
```

###### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.adBreaks"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#ad_breaks TranscoderJob#ad_breaks}

---

###### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.editList"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#edit_list TranscoderJob#edit_list}

---

###### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.elementaryStreams"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

###### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.encryptions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#encryptions TranscoderJob#encryptions}

---

###### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.inputs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

###### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.manifests"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#manifests TranscoderJob#manifests}

---

###### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.muxStreams"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

###### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#output TranscoderJob#output}

---

###### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.overlays"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#overlays TranscoderJob#overlays}

---

###### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pubsub_destination TranscoderJob#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#create TranscoderJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#delete TranscoderJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#update TranscoderJob#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TranscoderJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TranscoderJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.config"></a>

```python
config: TranscoderJobConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts"></a>

```python
timeouts: TranscoderJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput"></a>

```python
config_input: TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | TranscoderJobTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobConfig <a name="TranscoderJobConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  config: TranscoderJobConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_id: str = None,
  timeouts: TranscoderJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location">location</a></code> | <code>str</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId">template_id</a></code> | <code>str</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#location TranscoderJob#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config"></a>

```python
config: TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#config TranscoderJob#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#labels TranscoderJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#project TranscoderJob#project}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#template_id TranscoderJob#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts"></a>

```python
timeouts: TranscoderJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#timeouts TranscoderJob#timeouts}

---

### TranscoderJobConfigA <a name="TranscoderJobConfigA" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigA(
  ad_breaks: IResolvable | typing.List[TranscoderJobConfigAdBreaks] = None,
  edit_list: IResolvable | typing.List[TranscoderJobConfigEditListStruct] = None,
  elementary_streams: IResolvable | typing.List[TranscoderJobConfigElementaryStreams] = None,
  encryptions: IResolvable | typing.List[TranscoderJobConfigEncryptions] = None,
  inputs: IResolvable | typing.List[TranscoderJobConfigInputs] = None,
  manifests: IResolvable | typing.List[TranscoderJobConfigManifests] = None,
  mux_streams: IResolvable | typing.List[TranscoderJobConfigMuxStreams] = None,
  output: TranscoderJobConfigOutput = None,
  overlays: IResolvable | typing.List[TranscoderJobConfigOverlays] = None,
  pubsub_destination: TranscoderJobConfigPubsubDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks">ad_breaks</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList">edit_list</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams">elementary_streams</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions">encryptions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs">inputs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests">manifests</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams">mux_streams</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays">overlays</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks"></a>

```python
ad_breaks: IResolvable | typing.List[TranscoderJobConfigAdBreaks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#ad_breaks TranscoderJob#ad_breaks}

---

##### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList"></a>

```python
edit_list: IResolvable | typing.List[TranscoderJobConfigEditListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#edit_list TranscoderJob#edit_list}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams"></a>

```python
elementary_streams: IResolvable | typing.List[TranscoderJobConfigElementaryStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions"></a>

```python
encryptions: IResolvable | typing.List[TranscoderJobConfigEncryptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#encryptions TranscoderJob#encryptions}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs"></a>

```python
inputs: IResolvable | typing.List[TranscoderJobConfigInputs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests"></a>

```python
manifests: IResolvable | typing.List[TranscoderJobConfigManifests]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#manifests TranscoderJob#manifests}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams"></a>

```python
mux_streams: IResolvable | typing.List[TranscoderJobConfigMuxStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output"></a>

```python
output: TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#output TranscoderJob#output}

---

##### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays"></a>

```python
overlays: IResolvable | typing.List[TranscoderJobConfigOverlays]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#overlays TranscoderJob#overlays}

---

##### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination"></a>

```python
pubsub_destination: TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pubsub_destination TranscoderJob#pubsub_destination}

---

### TranscoderJobConfigAdBreaks <a name="TranscoderJobConfigAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigAdBreaks(
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigEditListStruct <a name="TranscoderJobConfigEditListStruct" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEditListStruct(
  inputs: typing.List[str] = None,
  key: str = None,
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the atom, relative to the input file timeline. The default is '0s'. |

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigElementaryStreams <a name="TranscoderJobConfigElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreams(
  audio_stream: TranscoderJobConfigElementaryStreamsAudioStream = None,
  key: str = None,
  video_stream: TranscoderJobConfigElementaryStreamsVideoStream = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `audio_stream`<sup>Optional</sup> <a name="audio_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream"></a>

```python
audio_stream: TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#audio_stream TranscoderJob#audio_stream}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `video_stream`<sup>Optional</sup> <a name="video_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream"></a>

```python
video_stream: TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#video_stream TranscoderJob#video_stream}

---

### TranscoderJobConfigElementaryStreamsAudioStream <a name="TranscoderJobConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream(
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
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec">codec</a></code> | <code>str</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_count TranscoderJob#channel_count}

---

##### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_layout TranscoderJob#channel_layout}

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec"></a>

```python
codec: str
```

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#codec TranscoderJob#codec}

---

##### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sample_rate_hertz TranscoderJob#sample_rate_hertz}

---

### TranscoderJobConfigElementaryStreamsVideoStream <a name="TranscoderJobConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream(
  h264: TranscoderJobConfigElementaryStreamsVideoStreamH264 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264"></a>

```python
h264: TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#h264 TranscoderJob#h264}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration">gop_duration</a></code> | <code>str</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat">pixel_format</a></code> | <code>str</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset">preset</a></code> | <code>str</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile">profile</a></code> | <code>str</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | The width of the video in pixels. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#frame_rate TranscoderJob#frame_rate}

---

##### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#crf_level TranscoderJob#crf_level}

---

##### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#entropy_coder TranscoderJob#entropy_coder}

---

##### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#gop_duration TranscoderJob#gop_duration}

---

##### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#height_pixels TranscoderJob#height_pixels}

---

##### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```python
hlg: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#hlg TranscoderJob#hlg}

---

##### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pixel_format TranscoderJob#pixel_format}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```python
preset: str
```

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#preset TranscoderJob#preset}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```python
profile: str
```

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#profile TranscoderJob#profile}

---

##### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#rate_control_mode TranscoderJob#rate_control_mode}

---

##### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```python
sdr: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sdr TranscoderJob#sdr}

---

##### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_fullness_bits TranscoderJob#vbv_fullness_bits}

---

##### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_size_bits TranscoderJob#vbv_size_bits}

---

##### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#width_pixels TranscoderJob#width_pixels}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg()
```


### TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr()
```


### TranscoderJobConfigEncryptions <a name="TranscoderJobConfigEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptions(
  id: str,
  aes128: TranscoderJobConfigEncryptionsAes128 = None,
  drm_systems: TranscoderJobConfigEncryptionsDrmSystems = None,
  mpeg_cenc: TranscoderJobConfigEncryptionsMpegCenc = None,
  sample_aes: TranscoderJobConfigEncryptionsSampleAes = None,
  secret_manager_key_source: TranscoderJobConfigEncryptionsSecretManagerKeySource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id">id</a></code> | <code>str</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#id TranscoderJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aes128`<sup>Optional</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128"></a>

```python
aes128: TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#aes128 TranscoderJob#aes128}

---

##### `drm_systems`<sup>Optional</sup> <a name="drm_systems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems"></a>

```python
drm_systems: TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#drm_systems TranscoderJob#drm_systems}

---

##### `mpeg_cenc`<sup>Optional</sup> <a name="mpeg_cenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc"></a>

```python
mpeg_cenc: TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mpeg_cenc TranscoderJob#mpeg_cenc}

---

##### `sample_aes`<sup>Optional</sup> <a name="sample_aes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes"></a>

```python
sample_aes: TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sample_aes TranscoderJob#sample_aes}

---

##### `secret_manager_key_source`<sup>Optional</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#secret_manager_key_source TranscoderJob#secret_manager_key_source}

---

### TranscoderJobConfigEncryptionsAes128 <a name="TranscoderJobConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsAes128()
```


### TranscoderJobConfigEncryptionsDrmSystems <a name="TranscoderJobConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystems(
  clearkey: TranscoderJobConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: TranscoderJobConfigEncryptionsDrmSystemsFairplay = None,
  playready: TranscoderJobConfigEncryptionsDrmSystemsPlayready = None,
  widevine: TranscoderJobConfigEncryptionsDrmSystemsWidevine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey"></a>

```python
clearkey: TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#clearkey TranscoderJob#clearkey}

---

##### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay"></a>

```python
fairplay: TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fairplay TranscoderJob#fairplay}

---

##### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready"></a>

```python
playready: TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#playready TranscoderJob#playready}

---

##### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine"></a>

```python
widevine: TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#widevine TranscoderJob#widevine}

---

### TranscoderJobConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey()
```


### TranscoderJobConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay()
```


### TranscoderJobConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready()
```


### TranscoderJobConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine()
```


### TranscoderJobConfigEncryptionsMpegCenc <a name="TranscoderJobConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsMpegCenc(
  scheme: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme">scheme</a></code> | <code>str</code> | Specify the encryption scheme. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#scheme TranscoderJob#scheme}

---

### TranscoderJobConfigEncryptionsSampleAes <a name="TranscoderJobConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsSampleAes()
```


### TranscoderJobConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion">secret_version</a></code> | <code>str</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#secret_version TranscoderJob#secret_version}

---

### TranscoderJobConfigInputs <a name="TranscoderJobConfigInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigInputs(
  key: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key">key</a></code> | <code>str</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri">uri</a></code> | <code>str</code> | URI of the media. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigManifests <a name="TranscoderJobConfigManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigManifests(
  file_name: str = None,
  mux_streams: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type">type</a></code> | <code>str</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#type TranscoderJob#type}

---

### TranscoderJobConfigMuxStreams <a name="TranscoderJobConfigMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigMuxStreams(
  container: str = None,
  elementary_streams: typing.List[str] = None,
  encryption_id: str = None,
  file_name: str = None,
  key: str = None,
  segment_settings: TranscoderJobConfigMuxStreamsSegmentSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container">container</a></code> | <code>str</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId">encryption_id</a></code> | <code>str</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key">key</a></code> | <code>str</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container"></a>

```python
container: str
```

- *Type:* str

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#container TranscoderJob#container}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `encryption_id`<sup>Optional</sup> <a name="encryption_id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#encryption_id TranscoderJob#encryption_id}

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `segment_settings`<sup>Optional</sup> <a name="segment_settings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings"></a>

```python
segment_settings: TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#segment_settings TranscoderJob#segment_settings}

---

### TranscoderJobConfigMuxStreamsSegmentSettings <a name="TranscoderJobConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings(
  segment_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration">segment_duration</a></code> | <code>str</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#segment_duration TranscoderJob#segment_duration}

---

### TranscoderJobConfigOutput <a name="TranscoderJobConfigOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOutput(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri">uri</a></code> | <code>str</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigOverlays <a name="TranscoderJobConfigOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlays(
  animations: IResolvable | typing.List[TranscoderJobConfigOverlaysAnimations] = None,
  image: TranscoderJobConfigOverlaysImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations">animations</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | image block. |

---

##### `animations`<sup>Optional</sup> <a name="animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations"></a>

```python
animations: IResolvable | typing.List[TranscoderJobConfigOverlaysAnimations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#animations TranscoderJob#animations}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image"></a>

```python
image: TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#image TranscoderJob#image}

---

### TranscoderJobConfigOverlaysAnimations <a name="TranscoderJobConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimations(
  animation_fade: TranscoderJobConfigOverlaysAnimationsAnimationFade = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `animation_fade`<sup>Optional</sup> <a name="animation_fade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade"></a>

```python
animation_fade: TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#animation_fade TranscoderJob#animation_fade}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType">fade_type</a></code> | <code>str</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fade_type TranscoderJob#fade_type}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#end_time_offset TranscoderJob#end_time_offset}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

##### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```python
xy: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#xy TranscoderJob#xy}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x">x</a></code> | <code>typing.Union[int, float]</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y">y</a></code> | <code>typing.Union[int, float]</code> | Normalized y coordinate. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#x TranscoderJob#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#y TranscoderJob#y}

---

### TranscoderJobConfigOverlaysImage <a name="TranscoderJobConfigOverlaysImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysImage(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri">uri</a></code> | <code>str</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigPubsubDestination <a name="TranscoderJobConfigPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigPubsubDestination(
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#topic TranscoderJob#topic}

---

### TranscoderJobTimeouts <a name="TranscoderJobTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#create TranscoderJob#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#delete TranscoderJob#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#update TranscoderJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#create TranscoderJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#delete TranscoderJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#update TranscoderJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobConfigAdBreaksList <a name="TranscoderJobConfigAdBreaksList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigAdBreaks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]

---


### TranscoderJobConfigAdBreaksOutputReference <a name="TranscoderJobConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigAdBreaks
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>

---


### TranscoderJobConfigAOutputReference <a name="TranscoderJobConfigAOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks">put_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList">put_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams">put_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions">put_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs">put_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests">put_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams">put_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays">put_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks">reset_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList">reset_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions">reset_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests">reset_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays">reset_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination">reset_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_breaks` <a name="put_ad_breaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks"></a>

```python
def put_ad_breaks(
  value: IResolvable | typing.List[TranscoderJobConfigAdBreaks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]

---

##### `put_edit_list` <a name="put_edit_list" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList"></a>

```python
def put_edit_list(
  value: IResolvable | typing.List[TranscoderJobConfigEditListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]

---

##### `put_elementary_streams` <a name="put_elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams"></a>

```python
def put_elementary_streams(
  value: IResolvable | typing.List[TranscoderJobConfigElementaryStreams]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]

---

##### `put_encryptions` <a name="put_encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions"></a>

```python
def put_encryptions(
  value: IResolvable | typing.List[TranscoderJobConfigEncryptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]

---

##### `put_inputs` <a name="put_inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs"></a>

```python
def put_inputs(
  value: IResolvable | typing.List[TranscoderJobConfigInputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]

---

##### `put_manifests` <a name="put_manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests"></a>

```python
def put_manifests(
  value: IResolvable | typing.List[TranscoderJobConfigManifests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]

---

##### `put_mux_streams` <a name="put_mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams"></a>

```python
def put_mux_streams(
  value: IResolvable | typing.List[TranscoderJobConfigMuxStreams]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]

---

##### `put_output` <a name="put_output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput"></a>

```python
def put_output(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput.parameter.uri"></a>

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

##### `put_overlays` <a name="put_overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays"></a>

```python
def put_overlays(
  value: IResolvable | typing.List[TranscoderJobConfigOverlays]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]

---

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str = None
) -> None
```

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#topic TranscoderJob#topic}

---

##### `reset_ad_breaks` <a name="reset_ad_breaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks"></a>

```python
def reset_ad_breaks() -> None
```

##### `reset_edit_list` <a name="reset_edit_list" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList"></a>

```python
def reset_edit_list() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryptions` <a name="reset_encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions"></a>

```python
def reset_encryptions() -> None
```

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_manifests` <a name="reset_manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests"></a>

```python
def reset_manifests() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_overlays` <a name="reset_overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays"></a>

```python
def reset_overlays() -> None
```

##### `reset_pubsub_destination` <a name="reset_pubsub_destination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination"></a>

```python
def reset_pubsub_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList">edit_list</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions">encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams">mux_streams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays">overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput">ad_breaks_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput">edit_list_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput">encryptions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput">inputs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput">manifests_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput">output_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput">overlays_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks"></a>

```python
ad_breaks: TranscoderJobConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a>

---

##### `edit_list`<sup>Required</sup> <a name="edit_list" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList"></a>

```python
edit_list: TranscoderJobConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a>

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: TranscoderJobConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a>

---

##### `encryptions`<sup>Required</sup> <a name="encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions"></a>

```python
encryptions: TranscoderJobConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs"></a>

```python
inputs: TranscoderJobConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests"></a>

```python
manifests: TranscoderJobConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a>

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams"></a>

```python
mux_streams: TranscoderJobConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output"></a>

```python
output: TranscoderJobConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a>

---

##### `overlays`<sup>Required</sup> <a name="overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays"></a>

```python
overlays: TranscoderJobConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a>

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: TranscoderJobConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a>

---

##### `ad_breaks_input`<sup>Optional</sup> <a name="ad_breaks_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput"></a>

```python
ad_breaks_input: IResolvable | typing.List[TranscoderJobConfigAdBreaks]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks">TranscoderJobConfigAdBreaks</a>]

---

##### `edit_list_input`<sup>Optional</sup> <a name="edit_list_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput"></a>

```python
edit_list_input: IResolvable | typing.List[TranscoderJobConfigEditListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: IResolvable | typing.List[TranscoderJobConfigElementaryStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]

---

##### `encryptions_input`<sup>Optional</sup> <a name="encryptions_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput"></a>

```python
encryptions_input: IResolvable | typing.List[TranscoderJobConfigEncryptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput"></a>

```python
inputs_input: IResolvable | typing.List[TranscoderJobConfigInputs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]

---

##### `manifests_input`<sup>Optional</sup> <a name="manifests_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput"></a>

```python
manifests_input: IResolvable | typing.List[TranscoderJobConfigManifests]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: IResolvable | typing.List[TranscoderJobConfigMuxStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput"></a>

```python
output_input: TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---

##### `overlays_input`<sup>Optional</sup> <a name="overlays_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput"></a>

```python
overlays_input: IResolvable | typing.List[TranscoderJobConfigOverlays]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---


### TranscoderJobConfigEditListStructList <a name="TranscoderJobConfigEditListStructList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEditListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigEditListStruct]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>]

---


### TranscoderJobConfigEditListStructOutputReference <a name="TranscoderJobConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEditListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput">inputs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput"></a>

```python
inputs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigEditListStruct
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct">TranscoderJobConfigEditListStruct</a>

---


### TranscoderJobConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">reset_channel_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">reset_channel_layout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec">reset_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">reset_sample_rate_hertz</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_count` <a name="reset_channel_count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```python
def reset_channel_count() -> None
```

##### `reset_channel_layout` <a name="reset_channel_layout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```python
def reset_channel_layout() -> None
```

##### `reset_codec` <a name="reset_codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```python
def reset_codec() -> None
```

##### `reset_sample_rate_hertz` <a name="reset_sample_rate_hertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```python
def reset_sample_rate_hertz() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">channel_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">channel_layout_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">sample_rate_hertz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec">codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count_input`<sup>Optional</sup> <a name="channel_count_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```python
channel_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout_input`<sup>Optional</sup> <a name="channel_layout_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```python
channel_layout_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec_input`<sup>Optional</sup> <a name="codec_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```python
codec_input: str
```

- *Type:* str

---

##### `sample_rate_hertz_input`<sup>Optional</sup> <a name="sample_rate_hertz_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```python
sample_rate_hertz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count`<sup>Required</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout`<sup>Required</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```python
codec: str
```

- *Type:* str

---

##### `sample_rate_hertz`<sup>Required</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobConfigElementaryStreamsList <a name="TranscoderJobConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigElementaryStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>]

---


### TranscoderJobConfigElementaryStreamsOutputReference <a name="TranscoderJobConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream">put_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream">put_video_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream">reset_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream">reset_video_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_stream` <a name="put_audio_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream"></a>

```python
def put_audio_stream(
  bitrate_bps: typing.Union[int, float],
  channel_count: typing.Union[int, float] = None,
  channel_layout: typing.List[str] = None,
  codec: str = None,
  sample_rate_hertz: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

###### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelCount"></a>

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_count TranscoderJob#channel_count}

---

###### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelLayout"></a>

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#channel_layout TranscoderJob#channel_layout}

---

###### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.codec"></a>

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#codec TranscoderJob#codec}

---

###### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.sampleRateHertz"></a>

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sample_rate_hertz TranscoderJob#sample_rate_hertz}

---

##### `put_video_stream` <a name="put_video_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream"></a>

```python
def put_video_stream(
  h264: TranscoderJobConfigElementaryStreamsVideoStreamH264 = None
) -> None
```

###### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream.parameter.h264"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#h264 TranscoderJob#h264}

---

##### `reset_audio_stream` <a name="reset_audio_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```python
def reset_audio_stream() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_video_stream` <a name="reset_video_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```python
def reset_video_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput">audio_stream_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput">video_stream_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_stream`<sup>Required</sup> <a name="audio_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream"></a>

```python
audio_stream: TranscoderJobConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `video_stream`<sup>Required</sup> <a name="video_stream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream"></a>

```python
video_stream: TranscoderJobConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `audio_stream_input`<sup>Optional</sup> <a name="audio_stream_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```python
audio_stream_input: TranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `video_stream_input`<sup>Optional</sup> <a name="video_stream_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```python
video_stream_input: TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigElementaryStreams
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams">TranscoderJobConfigElementaryStreams</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">put_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">put_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">reset_crf_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">reset_entropy_coder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">reset_gop_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">reset_height_pixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">reset_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">reset_pixel_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">reset_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">reset_rate_control_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">reset_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">reset_vbv_fullness_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">reset_vbv_size_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">reset_width_pixels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hlg` <a name="put_hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```python
def put_hlg() -> None
```

##### `put_sdr` <a name="put_sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```python
def put_sdr() -> None
```

##### `reset_crf_level` <a name="reset_crf_level" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```python
def reset_crf_level() -> None
```

##### `reset_entropy_coder` <a name="reset_entropy_coder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```python
def reset_entropy_coder() -> None
```

##### `reset_gop_duration` <a name="reset_gop_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```python
def reset_gop_duration() -> None
```

##### `reset_height_pixels` <a name="reset_height_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```python
def reset_height_pixels() -> None
```

##### `reset_hlg` <a name="reset_hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```python
def reset_hlg() -> None
```

##### `reset_pixel_format` <a name="reset_pixel_format" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```python
def reset_pixel_format() -> None
```

##### `reset_preset` <a name="reset_preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```python
def reset_preset() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_rate_control_mode` <a name="reset_rate_control_mode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```python
def reset_rate_control_mode() -> None
```

##### `reset_sdr` <a name="reset_sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```python
def reset_sdr() -> None
```

##### `reset_vbv_fullness_bits` <a name="reset_vbv_fullness_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```python
def reset_vbv_fullness_bits() -> None
```

##### `reset_vbv_size_bits` <a name="reset_vbv_size_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```python
def reset_vbv_size_bits() -> None
```

##### `reset_width_pixels` <a name="reset_width_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```python
def reset_width_pixels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">crf_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">entropy_coder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">frame_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">gop_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">height_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">hlg_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">pixel_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">preset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">rate_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">sdr_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">vbv_fullness_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">vbv_size_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">width_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">gop_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">pixel_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">preset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hlg`<sup>Required</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```python
hlg: TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `sdr`<sup>Required</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```python
sdr: TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level_input`<sup>Optional</sup> <a name="crf_level_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```python
crf_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder_input`<sup>Optional</sup> <a name="entropy_coder_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```python
entropy_coder_input: str
```

- *Type:* str

---

##### `frame_rate_input`<sup>Optional</sup> <a name="frame_rate_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```python
frame_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration_input`<sup>Optional</sup> <a name="gop_duration_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```python
gop_duration_input: str
```

- *Type:* str

---

##### `height_pixels_input`<sup>Optional</sup> <a name="height_pixels_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```python
height_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hlg_input`<sup>Optional</sup> <a name="hlg_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```python
hlg_input: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `pixel_format_input`<sup>Optional</sup> <a name="pixel_format_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```python
pixel_format_input: str
```

- *Type:* str

---

##### `preset_input`<sup>Optional</sup> <a name="preset_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```python
preset_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `rate_control_mode_input`<sup>Optional</sup> <a name="rate_control_mode_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```python
rate_control_mode_input: str
```

- *Type:* str

---

##### `sdr_input`<sup>Optional</sup> <a name="sdr_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```python
sdr_input: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `vbv_fullness_bits_input`<sup>Optional</sup> <a name="vbv_fullness_bits_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```python
vbv_fullness_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits_input`<sup>Optional</sup> <a name="vbv_size_bits_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```python
vbv_size_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels_input`<sup>Optional</sup> <a name="width_pixels_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```python
width_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level`<sup>Required</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder`<sup>Required</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration`<sup>Required</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

---

##### `height_pixels`<sup>Required</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pixel_format`<sup>Required</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```python
preset: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `rate_control_mode`<sup>Required</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

---

##### `vbv_fullness_bits`<sup>Required</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits`<sup>Required</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels`<sup>Required</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264">put_h264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264">reset_h264</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_h264` <a name="put_h264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```python
def put_h264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

###### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.frameRate"></a>

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#frame_rate TranscoderJob#frame_rate}

---

###### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.crfLevel"></a>

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#crf_level TranscoderJob#crf_level}

---

###### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.entropyCoder"></a>

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#entropy_coder TranscoderJob#entropy_coder}

---

###### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.gopDuration"></a>

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#gop_duration TranscoderJob#gop_duration}

---

###### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.heightPixels"></a>

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#height_pixels TranscoderJob#height_pixels}

---

###### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.hlg"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#hlg TranscoderJob#hlg}

---

###### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.pixelFormat"></a>

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#pixel_format TranscoderJob#pixel_format}

---

###### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.preset"></a>

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#preset TranscoderJob#preset}

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.profile"></a>

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#profile TranscoderJob#profile}

---

###### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.rateControlMode"></a>

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#rate_control_mode TranscoderJob#rate_control_mode}

---

###### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.sdr"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#sdr TranscoderJob#sdr}

---

###### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvFullnessBits"></a>

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_fullness_bits TranscoderJob#vbv_fullness_bits}

---

###### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvSizeBits"></a>

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#vbv_size_bits TranscoderJob#vbv_size_bits}

---

###### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.widthPixels"></a>

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#width_pixels TranscoderJob#width_pixels}

---

##### `reset_h264` <a name="reset_h264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```python
def reset_h264() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">h264_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `h264`<sup>Required</sup> <a name="h264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```python
h264: TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `h264_input`<sup>Optional</sup> <a name="h264_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```python
h264_input: TranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobConfigEncryptionsAes128OutputReference <a name="TranscoderJobConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey">put_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay">put_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready">put_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine">put_widevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey">reset_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay">reset_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready">reset_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine">reset_widevine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clearkey` <a name="put_clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```python
def put_clearkey() -> None
```

##### `put_fairplay` <a name="put_fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```python
def put_fairplay() -> None
```

##### `put_playready` <a name="put_playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```python
def put_playready() -> None
```

##### `put_widevine` <a name="put_widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```python
def put_widevine() -> None
```

##### `reset_clearkey` <a name="reset_clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```python
def reset_clearkey() -> None
```

##### `reset_fairplay` <a name="reset_fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```python
def reset_fairplay() -> None
```

##### `reset_playready` <a name="reset_playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```python
def reset_playready() -> None
```

##### `reset_widevine` <a name="reset_widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```python
def reset_widevine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">clearkey_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">fairplay_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">playready_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">widevine_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clearkey`<sup>Required</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```python
clearkey: TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `fairplay`<sup>Required</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```python
fairplay: TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `playready`<sup>Required</sup> <a name="playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```python
playready: TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `widevine`<sup>Required</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```python
widevine: TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `clearkey_input`<sup>Optional</sup> <a name="clearkey_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```python
clearkey_input: TranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `fairplay_input`<sup>Optional</sup> <a name="fairplay_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```python
fairplay_input: TranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `playready_input`<sup>Optional</sup> <a name="playready_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```python
playready_input: TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `widevine_input`<sup>Optional</sup> <a name="widevine_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```python
widevine_input: TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobConfigEncryptionsList <a name="TranscoderJobConfigEncryptionsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigEncryptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>]

---


### TranscoderJobConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---


### TranscoderJobConfigEncryptionsOutputReference <a name="TranscoderJobConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128">put_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems">put_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc">put_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes">put_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource">put_secret_manager_key_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128">reset_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems">reset_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc">reset_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes">reset_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource">reset_secret_manager_key_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aes128` <a name="put_aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128"></a>

```python
def put_aes128() -> None
```

##### `put_drm_systems` <a name="put_drm_systems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems"></a>

```python
def put_drm_systems(
  clearkey: TranscoderJobConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: TranscoderJobConfigEncryptionsDrmSystemsFairplay = None,
  playready: TranscoderJobConfigEncryptionsDrmSystemsPlayready = None,
  widevine: TranscoderJobConfigEncryptionsDrmSystemsWidevine = None
) -> None
```

###### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.clearkey"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#clearkey TranscoderJob#clearkey}

---

###### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.fairplay"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fairplay TranscoderJob#fairplay}

---

###### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.playready"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#playready TranscoderJob#playready}

---

###### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.widevine"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#widevine TranscoderJob#widevine}

---

##### `put_mpeg_cenc` <a name="put_mpeg_cenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc"></a>

```python
def put_mpeg_cenc(
  scheme: str
) -> None
```

###### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc.parameter.scheme"></a>

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#scheme TranscoderJob#scheme}

---

##### `put_sample_aes` <a name="put_sample_aes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes"></a>

```python
def put_sample_aes() -> None
```

##### `put_secret_manager_key_source` <a name="put_secret_manager_key_source" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```python
def put_secret_manager_key_source(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.secretVersion"></a>

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#secret_version TranscoderJob#secret_version}

---

##### `reset_aes128` <a name="reset_aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128"></a>

```python
def reset_aes128() -> None
```

##### `reset_drm_systems` <a name="reset_drm_systems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems"></a>

```python
def reset_drm_systems() -> None
```

##### `reset_mpeg_cenc` <a name="reset_mpeg_cenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc"></a>

```python
def reset_mpeg_cenc() -> None
```

##### `reset_sample_aes` <a name="reset_sample_aes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes"></a>

```python
def reset_sample_aes() -> None
```

##### `reset_secret_manager_key_source` <a name="reset_secret_manager_key_source" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```python
def reset_secret_manager_key_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input">aes128_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput">drm_systems_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput">mpeg_cenc_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput">sample_aes_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">secret_manager_key_source_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aes128`<sup>Required</sup> <a name="aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128"></a>

```python
aes128: TranscoderJobConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a>

---

##### `drm_systems`<sup>Required</sup> <a name="drm_systems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems"></a>

```python
drm_systems: TranscoderJobConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `mpeg_cenc`<sup>Required</sup> <a name="mpeg_cenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc"></a>

```python
mpeg_cenc: TranscoderJobConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a>

---

##### `sample_aes`<sup>Required</sup> <a name="sample_aes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes"></a>

```python
sample_aes: TranscoderJobConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a>

---

##### `secret_manager_key_source`<sup>Required</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `aes128_input`<sup>Optional</sup> <a name="aes128_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input"></a>

```python
aes128_input: TranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---

##### `drm_systems_input`<sup>Optional</sup> <a name="drm_systems_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```python
drm_systems_input: TranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mpeg_cenc_input`<sup>Optional</sup> <a name="mpeg_cenc_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```python
mpeg_cenc_input: TranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `sample_aes_input`<sup>Optional</sup> <a name="sample_aes_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```python
sample_aes_input: TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---

##### `secret_manager_key_source_input`<sup>Optional</sup> <a name="secret_manager_key_source_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```python
secret_manager_key_source_input: TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigEncryptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions">TranscoderJobConfigEncryptions</a>

---


### TranscoderJobConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---


### TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobConfigInputsList <a name="TranscoderJobConfigInputsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigInputs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>]

---


### TranscoderJobConfigInputsOutputReference <a name="TranscoderJobConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigInputs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs">TranscoderJobConfigInputs</a>

---


### TranscoderJobConfigManifestsList <a name="TranscoderJobConfigManifestsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigManifests]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>]

---


### TranscoderJobConfigManifestsOutputReference <a name="TranscoderJobConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigManifests
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests">TranscoderJobConfigManifests</a>

---


### TranscoderJobConfigMuxStreamsList <a name="TranscoderJobConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigMuxStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigMuxStreams]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>]

---


### TranscoderJobConfigMuxStreamsOutputReference <a name="TranscoderJobConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigMuxStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings">put_segment_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId">reset_encryption_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings">reset_segment_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segment_settings` <a name="put_segment_settings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```python
def put_segment_settings(
  segment_duration: str = None
) -> None
```

###### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings.parameter.segmentDuration"></a>

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#segment_duration TranscoderJob#segment_duration}

---

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryption_id` <a name="reset_encryption_id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```python
def reset_encryption_id() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_segment_settings` <a name="reset_segment_settings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```python
def reset_segment_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput">encryption_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput">segment_settings_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId">encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_settings`<sup>Required</sup> <a name="segment_settings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```python
segment_settings: TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id_input`<sup>Optional</sup> <a name="encryption_id_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```python
encryption_id_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `segment_settings_input`<sup>Optional</sup> <a name="segment_settings_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```python
segment_settings_input: TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id`<sup>Required</sup> <a name="encryption_id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigMuxStreams
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams">TranscoderJobConfigMuxStreams</a>

---


### TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">reset_segment_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_segment_duration` <a name="reset_segment_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```python
def reset_segment_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">segment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">segment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_duration_input`<sup>Optional</sup> <a name="segment_duration_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```python
segment_duration_input: str
```

- *Type:* str

---

##### `segment_duration`<sup>Required</sup> <a name="segment_duration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobConfigOutputOutputReference <a name="TranscoderJobConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">put_xy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">reset_xy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_xy` <a name="put_xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```python
def put_xy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
) -> None
```

###### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.x"></a>

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#x TranscoderJob#x}

---

###### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.y"></a>

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#y TranscoderJob#y}

---

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```

##### `reset_xy` <a name="reset_xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```python
def reset_xy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">fade_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">xy_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">fade_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `xy`<sup>Required</sup> <a name="xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```python
xy: TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: str
```

- *Type:* str

---

##### `fade_type_input`<sup>Optional</sup> <a name="fade_type_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```python
fade_type_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `xy_input`<sup>Optional</sup> <a name="xy_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```python
xy_input: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">reset_x</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">reset_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x` <a name="reset_x" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```python
def reset_x() -> None
```

##### `reset_y` <a name="reset_y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```python
def reset_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_input`<sup>Optional</sup> <a name="x_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```python
x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y_input`<sup>Optional</sup> <a name="y_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```python
y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobConfigOverlaysAnimationsList <a name="TranscoderJobConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigOverlaysAnimations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]

---


### TranscoderJobConfigOverlaysAnimationsOutputReference <a name="TranscoderJobConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade">put_animation_fade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade">reset_animation_fade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animation_fade` <a name="put_animation_fade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```python
def put_animation_fade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy = None
) -> None
```

###### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.fadeType"></a>

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#fade_type TranscoderJob#fade_type}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.endTimeOffset"></a>

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#end_time_offset TranscoderJob#end_time_offset}

---

###### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.startTimeOffset"></a>

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

###### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.xy"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#xy TranscoderJob#xy}

---

##### `reset_animation_fade` <a name="reset_animation_fade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```python
def reset_animation_fade() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput">animation_fade_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animation_fade`<sup>Required</sup> <a name="animation_fade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```python
animation_fade: TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `animation_fade_input`<sup>Optional</sup> <a name="animation_fade_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```python
animation_fade_input: TranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigOverlaysAnimations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>

---


### TranscoderJobConfigOverlaysImageOutputReference <a name="TranscoderJobConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---


### TranscoderJobConfigOverlaysList <a name="TranscoderJobConfigOverlaysList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TranscoderJobConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TranscoderJobConfigOverlays]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>]

---


### TranscoderJobConfigOverlaysOutputReference <a name="TranscoderJobConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigOverlaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations">put_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations">reset_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animations` <a name="put_animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations"></a>

```python
def put_animations(
  value: IResolvable | typing.List[TranscoderJobConfigOverlaysAnimations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]

---

##### `put_image` <a name="put_image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage"></a>

```python
def put_image(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage.parameter.uri"></a>

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

##### `reset_animations` <a name="reset_animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations"></a>

```python
def reset_animations() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations">animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput">animations_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput">image_input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animations`<sup>Required</sup> <a name="animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations"></a>

```python
animations: TranscoderJobConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image"></a>

```python
image: TranscoderJobConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a>

---

##### `animations_input`<sup>Optional</sup> <a name="animations_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput"></a>

```python
animations_input: IResolvable | typing.List[TranscoderJobConfigOverlaysAnimations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations">TranscoderJobConfigOverlaysAnimations</a>]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput"></a>

```python
image_input: TranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobConfigOverlays
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays">TranscoderJobConfigOverlays</a>

---


### TranscoderJobConfigPubsubDestinationOutputReference <a name="TranscoderJobConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: TranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---


### TranscoderJobTimeoutsOutputReference <a name="TranscoderJobTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import transcoder_job

transcoderJob.TranscoderJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TranscoderJobTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

---



