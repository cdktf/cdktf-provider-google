# `networkServicesTcpRoute` Submodule <a name="`networkServicesTcpRoute` Submodule" id="@cdktf/provider-google.networkServicesTcpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesTcpRoute <a name="NetworkServicesTcpRoute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route google_network_services_tcp_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rules: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesTcpRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#name NetworkServicesTcpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#rules NetworkServicesTcpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#description NetworkServicesTcpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#gateways NetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#labels NetworkServicesTcpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.meshes"></a>

- *Type:* typing.List[str]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#meshes NetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#timeouts NetworkServicesTcpRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetMeshes">reset_meshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#create NetworkServicesTcpRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#delete NetworkServicesTcpRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#update NetworkServicesTcpRoute#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_meshes` <a name="reset_meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetMeshes"></a>

```python
def reset_meshes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesTcpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesTcpRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesTcpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesTcpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList">NetworkServicesTcpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference">NetworkServicesTcpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshesInput">meshes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rules"></a>

```python
rules: NetworkServicesTcpRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList">NetworkServicesTcpRouteRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeouts"></a>

```python
timeouts: NetworkServicesTcpRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference">NetworkServicesTcpRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes_input`<sup>Optional</sup> <a name="meshes_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshesInput"></a>

```python
meshes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesTcpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesTcpRouteConfig <a name="NetworkServicesTcpRouteConfig" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rules: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesTcpRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#name NetworkServicesTcpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#rules NetworkServicesTcpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#description NetworkServicesTcpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#gateways NetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#id NetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#labels NetworkServicesTcpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#meshes NetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#project NetworkServicesTcpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesTcpRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#timeouts NetworkServicesTcpRoute#timeouts}

---

### NetworkServicesTcpRouteRules <a name="NetworkServicesTcpRouteRules" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRules(
  action: NetworkServicesTcpRouteRulesAction,
  matches: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesMatches]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.matches">matches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]</code> | matches block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.action"></a>

```python
action: NetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#action NetworkServicesTcpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules.property.matches"></a>

```python
matches: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#matches NetworkServicesTcpRoute#matches}

---

### NetworkServicesTcpRouteRulesAction <a name="NetworkServicesTcpRouteRulesAction" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction(
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]] = None,
  idle_timeout: str = None,
  original_destination: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | Specifies the idle timeout for the selected route. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.originalDestination">original_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Router will use the destination IP and port of the original connection as the destination of the request. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#destinations NetworkServicesTcpRoute#destinations}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#idle_timeout NetworkServicesTcpRoute#idle_timeout}

---

##### `original_destination`<sup>Optional</sup> <a name="original_destination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction.property.originalDestination"></a>

```python
original_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#original_destination NetworkServicesTcpRoute#original_destination}

---

### NetworkServicesTcpRouteRulesActionDestinations <a name="NetworkServicesTcpRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#service_name NetworkServicesTcpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#weight NetworkServicesTcpRoute#weight}

---

### NetworkServicesTcpRouteRulesMatches <a name="NetworkServicesTcpRouteRulesMatches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches(
  address: str,
  port: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.address">address</a></code> | <code>str</code> | Must be specified in the CIDR range format. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.port">port</a></code> | <code>str</code> | Specifies the destination port to match against. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.address"></a>

```python
address: str
```

- *Type:* str

Must be specified in the CIDR range format.

A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#address NetworkServicesTcpRoute#address}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches.property.port"></a>

```python
port: str
```

- *Type:* str

Specifies the destination port to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#port NetworkServicesTcpRoute#port}

---

### NetworkServicesTcpRouteTimeouts <a name="NetworkServicesTcpRouteTimeouts" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#create NetworkServicesTcpRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#delete NetworkServicesTcpRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#update NetworkServicesTcpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#create NetworkServicesTcpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#delete NetworkServicesTcpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#update NetworkServicesTcpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesTcpRouteRulesActionDestinationsList <a name="NetworkServicesTcpRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTcpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]

---


### NetworkServicesTcpRouteRulesActionDestinationsOutputReference <a name="NetworkServicesTcpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTcpRouteRulesActionDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]

---


### NetworkServicesTcpRouteRulesActionOutputReference <a name="NetworkServicesTcpRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination">reset_original_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_original_destination` <a name="reset_original_destination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination"></a>

```python
def reset_original_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList">NetworkServicesTcpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput">original_destination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination">original_destination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinations"></a>

```python
destinations: NetworkServicesTcpRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinationsList">NetworkServicesTcpRouteRulesActionDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `original_destination_input`<sup>Optional</sup> <a name="original_destination_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput"></a>

```python
original_destination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `original_destination`<sup>Required</sup> <a name="original_destination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination"></a>

```python
original_destination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

---


### NetworkServicesTcpRouteRulesList <a name="NetworkServicesTcpRouteRulesList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTcpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]]

---


### NetworkServicesTcpRouteRulesMatchesList <a name="NetworkServicesTcpRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTcpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]

---


### NetworkServicesTcpRouteRulesMatchesOutputReference <a name="NetworkServicesTcpRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTcpRouteRulesMatches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]

---


### NetworkServicesTcpRouteRulesOutputReference <a name="NetworkServicesTcpRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches">put_matches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resetMatches">reset_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction"></a>

```python
def put_action(
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesActionDestinations]] = None,
  idle_timeout: str = None,
  original_destination: typing.Union[bool, IResolvable] = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionDestinations">NetworkServicesTcpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#destinations NetworkServicesTcpRoute#destinations}

---

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction.parameter.idleTimeout"></a>

- *Type:* str

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#idle_timeout NetworkServicesTcpRoute#idle_timeout}

---

###### `original_destination`<sup>Optional</sup> <a name="original_destination" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putAction.parameter.originalDestination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_services_tcp_route#original_destination NetworkServicesTcpRoute#original_destination}

---

##### `put_matches` <a name="put_matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches"></a>

```python
def put_matches(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesMatches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]

---

##### `reset_matches` <a name="reset_matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.resetMatches"></a>

```python
def reset_matches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference">NetworkServicesTcpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList">NetworkServicesTcpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matchesInput">matches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.action"></a>

```python
action: NetworkServicesTcpRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesActionOutputReference">NetworkServicesTcpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matches"></a>

```python
matches: NetworkServicesTcpRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatchesList">NetworkServicesTcpRouteRulesMatchesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.actionInput"></a>

```python
action_input: NetworkServicesTcpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesAction">NetworkServicesTcpRouteRulesAction</a>

---

##### `matches_input`<sup>Optional</sup> <a name="matches_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.matchesInput"></a>

```python
matches_input: typing.Union[IResolvable, typing.List[NetworkServicesTcpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesMatches">NetworkServicesTcpRouteRulesMatches</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTcpRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteRules">NetworkServicesTcpRouteRules</a>]

---


### NetworkServicesTcpRouteTimeoutsOutputReference <a name="NetworkServicesTcpRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tcp_route

networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTcpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTcpRoute.NetworkServicesTcpRouteTimeouts">NetworkServicesTcpRouteTimeouts</a>]

---



