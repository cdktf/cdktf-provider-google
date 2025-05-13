# `apigeeAddonsConfig` Submodule <a name="`apigeeAddonsConfig` Submodule" id="@cdktf/provider-google.apigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAddonsConfig <a name="ApigeeAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org: str,
  addons_config: ApigeeAddonsConfigAddonsConfig = None,
  id: str = None,
  timeouts: ApigeeAddonsConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.org">org</a></code> | <code>str</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.org"></a>

- *Type:* str

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#org ApigeeAddonsConfig#org}

---

##### `addons_config`<sup>Optional</sup> <a name="addons_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.addonsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig">put_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig">reset_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_addons_config` <a name="put_addons_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig"></a>

```python
def put_addons_config(
  advanced_api_ops_config: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig = None,
  api_security_config: ApigeeAddonsConfigAddonsConfigApiSecurityConfig = None,
  connectors_platform_config: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig = None,
  integration_config: ApigeeAddonsConfigAddonsConfigIntegrationConfig = None,
  monetization_config: ApigeeAddonsConfigAddonsConfigMonetizationConfig = None
) -> None
```

###### `advanced_api_ops_config`<sup>Optional</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.advancedApiOpsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}

---

###### `api_security_config`<sup>Optional</sup> <a name="api_security_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.apiSecurityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}

---

###### `connectors_platform_config`<sup>Optional</sup> <a name="connectors_platform_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.connectorsPlatformConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}

---

###### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.integrationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}

---

###### `monetization_config`<sup>Optional</sup> <a name="monetization_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.monetizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}.

---

##### `reset_addons_config` <a name="reset_addons_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig"></a>

```python
def reset_addons_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeAddonsConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeAddonsConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeAddonsConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeAddonsConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeAddonsConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput">addons_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput">org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org">org</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addons_config`<sup>Required</sup> <a name="addons_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig"></a>

```python
addons_config: ApigeeAddonsConfigAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts"></a>

```python
timeouts: ApigeeAddonsConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `addons_config_input`<sup>Optional</sup> <a name="addons_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput"></a>

```python
addons_config_input: ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_input`<sup>Optional</sup> <a name="org_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput"></a>

```python
org_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org"></a>

```python
org: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAddonsConfigAddonsConfig <a name="ApigeeAddonsConfigAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig(
  advanced_api_ops_config: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig = None,
  api_security_config: ApigeeAddonsConfigAddonsConfigApiSecurityConfig = None,
  connectors_platform_config: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig = None,
  integration_config: ApigeeAddonsConfigAddonsConfigIntegrationConfig = None,
  monetization_config: ApigeeAddonsConfigAddonsConfigMonetizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">advanced_api_ops_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">api_security_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">connectors_platform_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig">monetization_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `advanced_api_ops_config`<sup>Optional</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```python
advanced_api_ops_config: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}

---

##### `api_security_config`<sup>Optional</sup> <a name="api_security_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```python
api_security_config: ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}

---

##### `connectors_platform_config`<sup>Optional</sup> <a name="connectors_platform_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```python
connectors_platform_config: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}

---

##### `integration_config`<sup>Optional</sup> <a name="integration_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```python
integration_config: ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}

---

##### `monetization_config`<sup>Optional</sup> <a name="monetization_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```python
monetization_config: ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}

---

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigConfig <a name="ApigeeAddonsConfigConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org: str,
  addons_config: ApigeeAddonsConfigAddonsConfig = None,
  id: str = None,
  timeouts: ApigeeAddonsConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org">org</a></code> | <code>str</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig">addons_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org"></a>

```python
org: str
```

- *Type:* str

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#org ApigeeAddonsConfig#org}

---

##### `addons_config`<sup>Optional</sup> <a name="addons_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig"></a>

```python
addons_config: ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts"></a>

```python
timeouts: ApigeeAddonsConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}

---

### ApigeeAddonsConfigTimeouts <a name="ApigeeAddonsConfigTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">put_advanced_api_ops_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">put_api_security_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">put_connectors_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">put_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">put_monetization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">reset_advanced_api_ops_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">reset_api_security_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">reset_connectors_platform_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">reset_integration_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">reset_monetization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_api_ops_config` <a name="put_advanced_api_ops_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```python
def put_advanced_api_ops_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

##### `put_api_security_config` <a name="put_api_security_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```python
def put_api_security_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

##### `put_connectors_platform_config` <a name="put_connectors_platform_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```python
def put_connectors_platform_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

##### `put_integration_config` <a name="put_integration_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```python
def put_integration_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

##### `put_monetization_config` <a name="put_monetization_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```python
def put_monetization_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

##### `reset_advanced_api_ops_config` <a name="reset_advanced_api_ops_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```python
def reset_advanced_api_ops_config() -> None
```

##### `reset_api_security_config` <a name="reset_api_security_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```python
def reset_api_security_config() -> None
```

##### `reset_connectors_platform_config` <a name="reset_connectors_platform_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```python
def reset_connectors_platform_config() -> None
```

##### `reset_integration_config` <a name="reset_integration_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```python
def reset_integration_config() -> None
```

##### `reset_monetization_config` <a name="reset_monetization_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```python
def reset_monetization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">advanced_api_ops_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">api_security_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">connectors_platform_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">integration_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">monetization_config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">advanced_api_ops_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">api_security_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">connectors_platform_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">integration_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">monetization_config_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_api_ops_config`<sup>Required</sup> <a name="advanced_api_ops_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```python
advanced_api_ops_config: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `api_security_config`<sup>Required</sup> <a name="api_security_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```python
api_security_config: ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `connectors_platform_config`<sup>Required</sup> <a name="connectors_platform_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```python
connectors_platform_config: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `integration_config`<sup>Required</sup> <a name="integration_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```python
integration_config: ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `monetization_config`<sup>Required</sup> <a name="monetization_config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```python
monetization_config: ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `advanced_api_ops_config_input`<sup>Optional</sup> <a name="advanced_api_ops_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```python
advanced_api_ops_config_input: ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `api_security_config_input`<sup>Optional</sup> <a name="api_security_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```python
api_security_config_input: ApigeeAddonsConfigAddonsConfigApiSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `connectors_platform_config_input`<sup>Optional</sup> <a name="connectors_platform_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```python
connectors_platform_config_input: ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `integration_config_input`<sup>Optional</sup> <a name="integration_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```python
integration_config_input: ApigeeAddonsConfigAddonsConfigIntegrationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `monetization_config_input`<sup>Optional</sup> <a name="monetization_config_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```python
monetization_config_input: ApigeeAddonsConfigAddonsConfigMonetizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeAddonsConfigAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---


### ApigeeAddonsConfigTimeoutsOutputReference <a name="ApigeeAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_addons_config

apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeAddonsConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>]

---



