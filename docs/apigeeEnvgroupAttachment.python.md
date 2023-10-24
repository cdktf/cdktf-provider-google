# `google_apigee_envgroup_attachment`

Refer to the Terraform Registory for docs: [`google_apigee_envgroup_attachment`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment).

# `apigeeEnvgroupAttachment` Submodule <a name="`apigeeEnvgroupAttachment` Submodule" id="@cdktf/provider-google.apigeeEnvgroupAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvgroupAttachment <a name="ApigeeEnvgroupAttachment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment google_apigee_envgroup_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  envgroup_id: str,
  environment: str,
  id: str = None,
  timeouts: ApigeeEnvgroupAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.envgroupId">envgroup_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `envgroup_id`<sup>Required</sup> <a name="envgroup_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.envgroupId"></a>

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#envgroup_id ApigeeEnvgroupAttachment#envgroup_id}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.environment"></a>

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#environment ApigeeEnvgroupAttachment#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#timeouts ApigeeEnvgroupAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeEnvgroupAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeEnvgroupAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeEnvgroupAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeEnvgroupAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvgroupAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput">envgroup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId">envgroup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeouts"></a>

```python
timeouts: ApigeeEnvgroupAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference">ApigeeEnvgroupAttachmentTimeoutsOutputReference</a>

---

##### `envgroup_id_input`<sup>Optional</sup> <a name="envgroup_id_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupIdInput"></a>

```python
envgroup_id_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeEnvgroupAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>]

---

##### `envgroup_id`<sup>Required</sup> <a name="envgroup_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.envgroupId"></a>

```python
envgroup_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvgroupAttachmentConfig <a name="ApigeeEnvgroupAttachmentConfig" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  envgroup_id: str,
  environment: str,
  id: str = None,
  timeouts: ApigeeEnvgroupAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId">envgroup_id</a></code> | <code>str</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment">environment</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `envgroup_id`<sup>Required</sup> <a name="envgroup_id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.envgroupId"></a>

```python
envgroup_id: str
```

- *Type:* str

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/envgroups/{{envgroup_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#envgroup_id ApigeeEnvgroupAttachment#envgroup_id}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#environment ApigeeEnvgroupAttachment#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#id ApigeeEnvgroupAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentConfig.property.timeouts"></a>

```python
timeouts: ApigeeEnvgroupAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#timeouts ApigeeEnvgroupAttachment#timeouts}

---

### ApigeeEnvgroupAttachmentTimeouts <a name="ApigeeEnvgroupAttachmentTimeouts" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#create ApigeeEnvgroupAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/apigee_envgroup_attachment#delete ApigeeEnvgroupAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvgroupAttachmentTimeoutsOutputReference <a name="ApigeeEnvgroupAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_envgroup_attachment

apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeEnvgroupAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEnvgroupAttachment.ApigeeEnvgroupAttachmentTimeouts">ApigeeEnvgroupAttachmentTimeouts</a>]

---



