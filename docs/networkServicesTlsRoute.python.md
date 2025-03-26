# `networkServicesTlsRoute` Submodule <a name="`networkServicesTlsRoute` Submodule" id="@cdktf/provider-google.networkServicesTlsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesTlsRoute <a name="NetworkServicesTlsRoute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route google_network_services_tls_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRoute(
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
  rules: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesTlsRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the TlsRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the TlsRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#name NetworkServicesTlsRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#rules NetworkServicesTlsRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#description NetworkServicesTlsRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#gateways NetworkServicesTlsRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.meshes"></a>

- *Type:* typing.List[str]

Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#meshes NetworkServicesTlsRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#timeouts NetworkServicesTlsRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetMeshes">reset_meshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#create NetworkServicesTlsRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#delete NetworkServicesTlsRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#update NetworkServicesTlsRoute#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_meshes` <a name="reset_meshes" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetMeshes"></a>

```python
def reset_meshes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesTlsRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesTlsRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesTlsRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesTlsRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesTlsRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList">NetworkServicesTlsRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference">NetworkServicesTlsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshesInput">meshes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rules"></a>

```python
rules: NetworkServicesTlsRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList">NetworkServicesTlsRouteRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeouts"></a>

```python
timeouts: NetworkServicesTlsRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference">NetworkServicesTlsRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meshes_input`<sup>Optional</sup> <a name="meshes_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshesInput"></a>

```python
meshes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesTlsRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesTlsRouteConfig <a name="NetworkServicesTlsRouteConfig" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rules: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesTlsRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the TlsRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the TlsRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#name NetworkServicesTlsRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#rules NetworkServicesTlsRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#description NetworkServicesTlsRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#gateways NetworkServicesTlsRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#id NetworkServicesTlsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#meshes NetworkServicesTlsRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#project NetworkServicesTlsRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesTlsRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#timeouts NetworkServicesTlsRoute#timeouts}

---

### NetworkServicesTlsRouteRules <a name="NetworkServicesTlsRouteRules" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRules(
  action: NetworkServicesTlsRouteRulesAction,
  matches: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesMatches]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.matches">matches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]</code> | matches block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.action"></a>

```python
action: NetworkServicesTlsRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#action NetworkServicesTlsRoute#action}

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules.property.matches"></a>

```python
matches: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#matches NetworkServicesTlsRoute#matches}

---

### NetworkServicesTlsRouteRulesAction <a name="NetworkServicesTlsRouteRulesAction" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction(
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]</code> | destinations block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#destinations NetworkServicesTlsRoute#destinations}

---

### NetworkServicesTlsRouteRulesActionDestinations <a name="NetworkServicesTlsRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#service_name NetworkServicesTlsRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#weight NetworkServicesTlsRoute#weight}

---

### NetworkServicesTlsRouteRulesMatches <a name="NetworkServicesTlsRouteRulesMatches" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches(
  alpn: typing.List[str] = None,
  sni_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.alpn">alpn</a></code> | <code>typing.List[str]</code> | ALPN (Application-Layer Protocol Negotiation) to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.sniHost">sni_host</a></code> | <code>typing.List[str]</code> | SNI (server name indicator) to match against. |

---

##### `alpn`<sup>Optional</sup> <a name="alpn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.alpn"></a>

```python
alpn: typing.List[str]
```

- *Type:* typing.List[str]

ALPN (Application-Layer Protocol Negotiation) to match against.

Examples: "http/1.1", "h2". At least one of sniHost and alpn is required. Up to 5 alpns across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#alpn NetworkServicesTlsRoute#alpn}

---

##### `sni_host`<sup>Optional</sup> <a name="sni_host" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches.property.sniHost"></a>

```python
sni_host: typing.List[str]
```

- *Type:* typing.List[str]

SNI (server name indicator) to match against.

SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com.
Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sniHost and alpn is required. Up to 5 sni hosts across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#sni_host NetworkServicesTlsRoute#sni_host}

---

### NetworkServicesTlsRouteTimeouts <a name="NetworkServicesTlsRouteTimeouts" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#create NetworkServicesTlsRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#delete NetworkServicesTlsRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#update NetworkServicesTlsRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#create NetworkServicesTlsRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#delete NetworkServicesTlsRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#update NetworkServicesTlsRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesTlsRouteRulesActionDestinationsList <a name="NetworkServicesTlsRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTlsRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]

---


### NetworkServicesTlsRouteRulesActionDestinationsOutputReference <a name="NetworkServicesTlsRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTlsRouteRulesActionDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]

---


### NetworkServicesTlsRouteRulesActionOutputReference <a name="NetworkServicesTlsRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList">NetworkServicesTlsRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinations"></a>

```python
destinations: NetworkServicesTlsRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinationsList">NetworkServicesTlsRouteRulesActionDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesTlsRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

---


### NetworkServicesTlsRouteRulesList <a name="NetworkServicesTlsRouteRulesList" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTlsRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]]

---


### NetworkServicesTlsRouteRulesMatchesList <a name="NetworkServicesTlsRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesTlsRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]

---


### NetworkServicesTlsRouteRulesMatchesOutputReference <a name="NetworkServicesTlsRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn">reset_alpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost">reset_sni_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alpn` <a name="reset_alpn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn"></a>

```python
def reset_alpn() -> None
```

##### `reset_sni_host` <a name="reset_sni_host" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost"></a>

```python
def reset_sni_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput">alpn_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput">sni_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn">alpn</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost">sni_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alpn_input`<sup>Optional</sup> <a name="alpn_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput"></a>

```python
alpn_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sni_host_input`<sup>Optional</sup> <a name="sni_host_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput"></a>

```python
sni_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alpn`<sup>Required</sup> <a name="alpn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn"></a>

```python
alpn: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sni_host`<sup>Required</sup> <a name="sni_host" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost"></a>

```python
sni_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTlsRouteRulesMatches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]

---


### NetworkServicesTlsRouteRulesOutputReference <a name="NetworkServicesTlsRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches">put_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction"></a>

```python
def put_action(
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesActionDestinations]] = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putAction.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionDestinations">NetworkServicesTlsRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/network_services_tls_route#destinations NetworkServicesTlsRoute#destinations}

---

##### `put_matches` <a name="put_matches" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches"></a>

```python
def put_matches(
  value: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesMatches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference">NetworkServicesTlsRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList">NetworkServicesTlsRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matchesInput">matches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.action"></a>

```python
action: NetworkServicesTlsRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesActionOutputReference">NetworkServicesTlsRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matches"></a>

```python
matches: NetworkServicesTlsRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatchesList">NetworkServicesTlsRouteRulesMatchesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.actionInput"></a>

```python
action_input: NetworkServicesTlsRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesAction">NetworkServicesTlsRouteRulesAction</a>

---

##### `matches_input`<sup>Optional</sup> <a name="matches_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.matchesInput"></a>

```python
matches_input: typing.Union[IResolvable, typing.List[NetworkServicesTlsRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesMatches">NetworkServicesTlsRouteRulesMatches</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTlsRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteRules">NetworkServicesTlsRouteRules</a>]

---


### NetworkServicesTlsRouteTimeoutsOutputReference <a name="NetworkServicesTlsRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_tls_route

networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesTlsRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesTlsRoute.NetworkServicesTlsRouteTimeouts">NetworkServicesTlsRouteTimeouts</a>]

---



