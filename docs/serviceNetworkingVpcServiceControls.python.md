# `serviceNetworkingVpcServiceControls` Submodule <a name="`serviceNetworkingVpcServiceControls` Submodule" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingVpcServiceControls <a name="ServiceNetworkingVpcServiceControls" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  network: str,
  service: str,
  id: str = None,
  project: str = None,
  timeouts: ServiceNetworkingVpcServiceControlsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.network">network</a></code> | <code>str</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.service">service</a></code> | <code>str</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.project">project</a></code> | <code>str</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.network"></a>

- *Type:* str

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.service"></a>

- *Type:* str

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.project"></a>

- *Type:* str

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceNetworkingVpcServiceControls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts"></a>

```python
timeouts: ServiceNetworkingVpcServiceControlsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceNetworkingVpcServiceControlsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingVpcServiceControlsConfig <a name="ServiceNetworkingVpcServiceControlsConfig" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  network: str,
  service: str,
  id: str = None,
  project: str = None,
  timeouts: ServiceNetworkingVpcServiceControlsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network">network</a></code> | <code>str</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service">service</a></code> | <code>str</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project">project</a></code> | <code>str</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```python
timeouts: ServiceNetworkingVpcServiceControlsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

### ServiceNetworkingVpcServiceControlsTimeouts <a name="ServiceNetworkingVpcServiceControlsTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="ServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_vpc_service_controls

serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceNetworkingVpcServiceControlsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>]

---



