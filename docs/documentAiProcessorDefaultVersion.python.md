# `documentAiProcessorDefaultVersion` Submodule <a name="`documentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google.documentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiProcessorDefaultVersion <a name="DocumentAiProcessorDefaultVersion" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor: str,
  version: str,
  id: str = None,
  timeouts: DocumentAiProcessorDefaultVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.processor">processor</a></code> | <code>str</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | The version to set. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.processor"></a>

- *Type:* str

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#processor DocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.version"></a>

- *Type:* str

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#version DocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#timeouts DocumentAiProcessorDefaultVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DocumentAiProcessorDefaultVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DocumentAiProcessorDefaultVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DocumentAiProcessorDefaultVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DocumentAiProcessorDefaultVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput">processor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor">processor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeouts"></a>

```python
timeouts: DocumentAiProcessorDefaultVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference">DocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `processor_input`<sup>Optional</sup> <a name="processor_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processorInput"></a>

```python
processor_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DocumentAiProcessorDefaultVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.processor"></a>

```python
processor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiProcessorDefaultVersionConfig <a name="DocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor: str,
  version: str,
  id: str = None,
  timeouts: DocumentAiProcessorDefaultVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor">processor</a></code> | <code>str</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version">version</a></code> | <code>str</code> | The version to set. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```python
processor: str
```

- *Type:* str

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#processor DocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#version DocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#id DocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```python
timeouts: DocumentAiProcessorDefaultVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#timeouts DocumentAiProcessorDefaultVersion#timeouts}

---

### DocumentAiProcessorDefaultVersionTimeouts <a name="DocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#create DocumentAiProcessorDefaultVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/document_ai_processor_default_version#delete DocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="DocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import document_ai_processor_default_version

documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DocumentAiProcessorDefaultVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.documentAiProcessorDefaultVersion.DocumentAiProcessorDefaultVersionTimeouts">DocumentAiProcessorDefaultVersionTimeouts</a>]

---



