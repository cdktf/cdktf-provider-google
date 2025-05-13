# `vmwareengineSubnet` Submodule <a name="`vmwareengineSubnet` Submodule" id="@cdktf/provider-google.vmwareengineSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineSubnet <a name="VmwareengineSubnet" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet google_vmwareengine_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_cidr_range: str,
  name: str,
  parent: str,
  id: str = None,
  timeouts: VmwareengineSubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP address range of the subnet in CIDR format. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the subnet. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new subnet in. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The IP address range of the subnet in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#ip_cidr_range VmwareengineSubnet#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.name"></a>

- *Type:* str

The ID of the subnet.

For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#name VmwareengineSubnet#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the private cloud to create a new subnet in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#parent VmwareengineSubnet#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#timeouts VmwareengineSubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#create VmwareengineSubnet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#delete VmwareengineSubnet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#update VmwareengineSubnet#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareengineSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareengineSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineSubnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dhcpAddressRanges">dhcp_address_ranges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList">VmwareengineSubnetDhcpAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayIp">gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.standardConfig">standard_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference">VmwareengineSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dhcp_address_ranges`<sup>Required</sup> <a name="dhcp_address_ranges" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.dhcpAddressRanges"></a>

```python
dhcp_address_ranges: VmwareengineSubnetDhcpAddressRangesList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList">VmwareengineSubnetDhcpAddressRangesList</a>

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_ip`<sup>Required</sup> <a name="gateway_ip" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.gatewayIp"></a>

```python
gateway_ip: str
```

- *Type:* str

---

##### `standard_config`<sup>Required</sup> <a name="standard_config" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.standardConfig"></a>

```python
standard_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeouts"></a>

```python
timeouts: VmwareengineSubnetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference">VmwareengineSubnetTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareengineSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineSubnetConfig <a name="VmwareengineSubnetConfig" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_cidr_range: str,
  name: str,
  parent: str,
  id: str = None,
  timeouts: VmwareengineSubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP address range of the subnet in CIDR format. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.name">name</a></code> | <code>str</code> | The ID of the subnet. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new subnet in. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The IP address range of the subnet in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#ip_cidr_range VmwareengineSubnet#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the subnet.

For userDefined subnets, this name should be in the format of "service-n",
where n ranges from 1 to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#name VmwareengineSubnet#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the private cloud to create a new subnet in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#parent VmwareengineSubnet#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#id VmwareengineSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetConfig.property.timeouts"></a>

```python
timeouts: VmwareengineSubnetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#timeouts VmwareengineSubnet#timeouts}

---

### VmwareengineSubnetDhcpAddressRanges <a name="VmwareengineSubnetDhcpAddressRanges" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges()
```


### VmwareengineSubnetTimeouts <a name="VmwareengineSubnetTimeouts" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#create VmwareengineSubnet#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#delete VmwareengineSubnet#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#update VmwareengineSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#create VmwareengineSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#delete VmwareengineSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/vmwareengine_subnet#update VmwareengineSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineSubnetDhcpAddressRangesList <a name="VmwareengineSubnetDhcpAddressRangesList" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareengineSubnetDhcpAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VmwareengineSubnetDhcpAddressRangesOutputReference <a name="VmwareengineSubnetDhcpAddressRangesOutputReference" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress">first_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress">last_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges">VmwareengineSubnetDhcpAddressRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_address`<sup>Required</sup> <a name="first_address" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.firstAddress"></a>

```python
first_address: str
```

- *Type:* str

---

##### `last_address`<sup>Required</sup> <a name="last_address" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.lastAddress"></a>

```python
last_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRangesOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineSubnetDhcpAddressRanges
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetDhcpAddressRanges">VmwareengineSubnetDhcpAddressRanges</a>

---


### VmwareengineSubnetTimeoutsOutputReference <a name="VmwareengineSubnetTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_subnet

vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineSubnet.VmwareengineSubnetTimeouts">VmwareengineSubnetTimeouts</a>]

---



