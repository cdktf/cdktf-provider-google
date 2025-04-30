# `networkServicesHttpRoute` Submodule <a name="`networkServicesHttpRoute` Submodule" id="@cdktf/provider-google.networkServicesHttpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesHttpRoute <a name="NetworkServicesHttpRoute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route google_network_services_http_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostnames: typing.List[str],
  name: str,
  rules: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesHttpRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.hostnames"></a>

- *Type:* typing.List[str]

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.gateways"></a>

- *Type:* typing.List[str]

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.meshes"></a>

- *Type:* typing.List[str]

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways">reset_gateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes">reset_meshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateways` <a name="reset_gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways"></a>

```python
def reset_gateways() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_meshes` <a name="reset_meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes"></a>

```python
def reset_meshes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesHttpRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesHttpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesHttpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput">gateways_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput">meshes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules"></a>

```python
rules: NetworkServicesHttpRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts"></a>

```python
timeouts: NetworkServicesHttpRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateways_input`<sup>Optional</sup> <a name="gateways_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput"></a>

```python
gateways_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes_input`<sup>Optional</sup> <a name="meshes_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput"></a>

```python
meshes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesHttpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesHttpRouteConfig <a name="NetworkServicesHttpRouteConfig" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostnames: typing.List[str],
  name: str,
  rules: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]],
  description: str = None,
  gateways: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  meshes: typing.List[str] = None,
  project: str = None,
  timeouts: NetworkServicesHttpRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways">gateways</a></code> | <code>typing.List[str]</code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes">meshes</a></code> | <code>typing.List[str]</code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways"></a>

```python
gateways: typing.List[str]
```

- *Type:* typing.List[str]

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes"></a>

```python
meshes: typing.List[str]
```

- *Type:* typing.List[str]

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesHttpRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}

---

### NetworkServicesHttpRouteRules <a name="NetworkServicesHttpRouteRules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRules(
  action: NetworkServicesHttpRouteRulesAction = None,
  matches: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatches]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches">matches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]</code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action"></a>

```python
action: NetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#action NetworkServicesHttpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches"></a>

```python
matches: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#matches NetworkServicesHttpRoute#matches}

---

### NetworkServicesHttpRouteRulesAction <a name="NetworkServicesHttpRouteRulesAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction(
  cors_policy: NetworkServicesHttpRouteRulesActionCorsPolicy = None,
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]] = None,
  fault_injection_policy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy = None,
  redirect: NetworkServicesHttpRouteRulesActionRedirect = None,
  request_header_modifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifier = None,
  request_mirror_policy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy = None,
  response_header_modifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifier = None,
  retry_policy: NetworkServicesHttpRouteRulesActionRetryPolicy = None,
  timeout: str = None,
  url_rewrite: NetworkServicesHttpRouteRulesActionUrlRewrite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy">cors_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy">fault_injection_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier">request_header_modifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | request_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy">request_mirror_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | request_mirror_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier">response_header_modifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | response_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for selected route. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite">url_rewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `cors_policy`<sup>Optional</sup> <a name="cors_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy"></a>

```python
cors_policy: NetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#cors_policy NetworkServicesHttpRoute#cors_policy}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destinations NetworkServicesHttpRoute#destinations}

---

##### `fault_injection_policy`<sup>Optional</sup> <a name="fault_injection_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy"></a>

```python
fault_injection_policy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fault_injection_policy NetworkServicesHttpRoute#fault_injection_policy}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect"></a>

```python
redirect: NetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#redirect NetworkServicesHttpRoute#redirect}

---

##### `request_header_modifier`<sup>Optional</sup> <a name="request_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier"></a>

```python
request_header_modifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_header_modifier NetworkServicesHttpRoute#request_header_modifier}

---

##### `request_mirror_policy`<sup>Optional</sup> <a name="request_mirror_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy"></a>

```python
request_mirror_policy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_mirror_policy NetworkServicesHttpRoute#request_mirror_policy}

---

##### `response_header_modifier`<sup>Optional</sup> <a name="response_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier"></a>

```python
response_header_modifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_header_modifier NetworkServicesHttpRoute#response_header_modifier}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy"></a>

```python
retry_policy: NetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_policy NetworkServicesHttpRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeout NetworkServicesHttpRoute#timeout}

---

##### `url_rewrite`<sup>Optional</sup> <a name="url_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite"></a>

```python
url_rewrite: NetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#url_rewrite NetworkServicesHttpRoute#url_rewrite}

---

### NetworkServicesHttpRouteRulesActionCorsPolicy <a name="NetworkServicesHttpRouteRulesActionCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origin_regexes: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  disabled: typing.Union[bool, IResolvable] = None,
  expose_headers: typing.List[str] = None,
  max_age: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | Specifies the content for Access-Control-Allow-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | Specifies the content for Access-Control-Allow-Methods header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes">allow_origin_regexes</a></code> | <code>typing.List[str]</code> | Specifies the regular expression patterns that match allowed origins. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Specifies the content for Access-Control-Expose-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge">max_age</a></code> | <code>str</code> | Specifies how long result of a preflight request can be cached in seconds. |

---

##### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_credentials NetworkServicesHttpRoute#allow_credentials}

---

##### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_headers NetworkServicesHttpRoute#allow_headers}

---

##### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_methods NetworkServicesHttpRoute#allow_methods}

---

##### `allow_origin_regexes`<sup>Optional</sup> <a name="allow_origin_regexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes"></a>

```python
allow_origin_regexes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origin_regexes NetworkServicesHttpRoute#allow_origin_regexes}

---

##### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origins NetworkServicesHttpRoute#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#disabled NetworkServicesHttpRoute#disabled}

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#expose_headers NetworkServicesHttpRoute#expose_headers}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge"></a>

```python
max_age: str
```

- *Type:* str

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#max_age NetworkServicesHttpRoute#max_age}

---

### NetworkServicesHttpRouteRulesActionDestinations <a name="NetworkServicesHttpRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy(
  abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort = None,
  delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```python
abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#abort NetworkServicesHttpRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```python
delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delay NetworkServicesHttpRoute#delay}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort(
  http_status: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">http_status</a></code> | <code>typing.Union[int, float]</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic which will be aborted. |

---

##### `http_status`<sup>Optional</sup> <a name="http_status" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```python
http_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#http_status NetworkServicesHttpRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay(
  fixed_delay: str = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixed_delay</a></code> | <code>str</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixed_delay`<sup>Optional</sup> <a name="fixed_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```python
fixed_delay: str
```

- *Type:* str

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fixed_delay NetworkServicesHttpRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionRedirect <a name="NetworkServicesHttpRouteRulesActionRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect(
  host_redirect: str = None,
  https_redirect: typing.Union[bool, IResolvable] = None,
  path_redirect: str = None,
  port_redirect: typing.Union[int, float] = None,
  prefix_rewrite: str = None,
  response_code: str = None,
  strip_query: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect">host_redirect</a></code> | <code>str</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect">https_redirect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect">path_redirect</a></code> | <code>str</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect">port_redirect</a></code> | <code>typing.Union[int, float]</code> | The port that will be used in the redirected request instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite">prefix_rewrite</a></code> | <code>str</code> | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode">response_code</a></code> | <code>str</code> | The HTTP Status code to use for the redirect. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery">strip_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `host_redirect`<sup>Optional</sup> <a name="host_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect"></a>

```python
host_redirect: str
```

- *Type:* str

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_redirect NetworkServicesHttpRoute#host_redirect}

---

##### `https_redirect`<sup>Optional</sup> <a name="https_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect"></a>

```python
https_redirect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#https_redirect NetworkServicesHttpRoute#https_redirect}

---

##### `path_redirect`<sup>Optional</sup> <a name="path_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect"></a>

```python
path_redirect: str
```

- *Type:* str

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_redirect NetworkServicesHttpRoute#path_redirect}

---

##### `port_redirect`<sup>Optional</sup> <a name="port_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect"></a>

```python
port_redirect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#port_redirect NetworkServicesHttpRoute#port_redirect}

---

##### `prefix_rewrite`<sup>Optional</sup> <a name="prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite"></a>

```python
prefix_rewrite: str
```

- *Type:* str

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_rewrite NetworkServicesHttpRoute#prefix_rewrite}

---

##### `response_code`<sup>Optional</sup> <a name="response_code" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode"></a>

```python
response_code: str
```

- *Type:* str

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_code NetworkServicesHttpRoute#response_code}

---

##### `strip_query`<sup>Optional</sup> <a name="strip_query" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery"></a>

```python
strip_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#strip_query NetworkServicesHttpRoute#strip_query}

---

### NetworkServicesHttpRouteRulesActionRequestHeaderModifier <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove">remove</a></code> | <code>typing.List[str]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicy <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy(
  destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination"></a>

```python
destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destination NetworkServicesHttpRoute#destination}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination(
  service_name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName">service_name</a></code> | <code>str</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionResponseHeaderModifier <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove">remove</a></code> | <code>typing.List[str]</code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRetryPolicy <a name="NetworkServicesHttpRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy(
  num_retries: typing.Union[int, float] = None,
  per_try_timeout: str = None,
  retry_conditions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout">per_try_timeout</a></code> | <code>str</code> | Specifies a non-zero timeout per retry attempt. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | Specifies one or more conditions when this retry policy applies. |

---

##### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#num_retries NetworkServicesHttpRoute#num_retries}

---

##### `per_try_timeout`<sup>Optional</sup> <a name="per_try_timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout"></a>

```python
per_try_timeout: str
```

- *Type:* str

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#per_try_timeout NetworkServicesHttpRoute#per_try_timeout}

---

##### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_conditions NetworkServicesHttpRoute#retry_conditions}

---

### NetworkServicesHttpRouteRulesActionUrlRewrite <a name="NetworkServicesHttpRouteRulesActionUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite(
  host_rewrite: str = None,
  path_prefix_rewrite: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite">host_rewrite</a></code> | <code>str</code> | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite">path_prefix_rewrite</a></code> | <code>str</code> | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. |

---

##### `host_rewrite`<sup>Optional</sup> <a name="host_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite"></a>

```python
host_rewrite: str
```

- *Type:* str

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_rewrite NetworkServicesHttpRoute#host_rewrite}

---

##### `path_prefix_rewrite`<sup>Optional</sup> <a name="path_prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite"></a>

```python
path_prefix_rewrite: str
```

- *Type:* str

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_prefix_rewrite NetworkServicesHttpRoute#path_prefix_rewrite}

---

### NetworkServicesHttpRouteRulesMatches <a name="NetworkServicesHttpRouteRulesMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches(
  full_path_match: str = None,
  headers: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesHeaders]] = None,
  ignore_case: typing.Union[bool, IResolvable] = None,
  prefix_match: str = None,
  query_parameters: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesQueryParameters]] = None,
  regex_match: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch">full_path_match</a></code> | <code>str</code> | The HTTP request path value should exactly match this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase">ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch">prefix_match</a></code> | <code>str</code> | The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters">query_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]</code> | query_parameters block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch">regex_match</a></code> | <code>str</code> | The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. |

---

##### `full_path_match`<sup>Optional</sup> <a name="full_path_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch"></a>

```python
full_path_match: str
```

- *Type:* str

The HTTP request path value should exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#full_path_match NetworkServicesHttpRoute#full_path_match}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#headers NetworkServicesHttpRoute#headers}

---

##### `ignore_case`<sup>Optional</sup> <a name="ignore_case" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase"></a>

```python
ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#ignore_case NetworkServicesHttpRoute#ignore_case}

---

##### `prefix_match`<sup>Optional</sup> <a name="prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch"></a>

```python
prefix_match: str
```

- *Type:* str

The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `query_parameters`<sup>Optional</sup> <a name="query_parameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters"></a>

```python
query_parameters: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesQueryParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#query_parameters NetworkServicesHttpRoute#query_parameters}

---

##### `regex_match`<sup>Optional</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL.

For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteRulesMatchesHeaders <a name="NetworkServicesHttpRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders(
  exact_match: str = None,
  header: str = None,
  invert_match: typing.Union[bool, IResolvable] = None,
  prefix_match: str = None,
  present_match: typing.Union[bool, IResolvable] = None,
  range_match: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch = None,
  regex_match: str = None,
  suffix_match: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch">exact_match</a></code> | <code>str</code> | The value of the header should match exactly the content of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header">header</a></code> | <code>str</code> | The name of the HTTP header to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch">invert_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If specified, the match result will be inverted before checking. Default value is set to false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch">prefix_match</a></code> | <code>str</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch">present_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A header with headerName must exist. The match takes place whether or not the header has a value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch">range_match</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | range_match block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch">regex_match</a></code> | <code>str</code> | The value of the header must match the regular expression specified in regexMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch">suffix_match</a></code> | <code>str</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `exact_match`<sup>Optional</sup> <a name="exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch"></a>

```python
exact_match: str
```

- *Type:* str

The value of the header should match exactly the content of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header"></a>

```python
header: str
```

- *Type:* str

The name of the HTTP header to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#header NetworkServicesHttpRoute#header}

---

##### `invert_match`<sup>Optional</sup> <a name="invert_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch"></a>

```python
invert_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If specified, the match result will be inverted before checking. Default value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#invert_match NetworkServicesHttpRoute#invert_match}

---

##### `prefix_match`<sup>Optional</sup> <a name="prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch"></a>

```python
prefix_match: str
```

- *Type:* str

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `present_match`<sup>Optional</sup> <a name="present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch"></a>

```python
present_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A header with headerName must exist. The match takes place whether or not the header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `range_match`<sup>Optional</sup> <a name="range_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch"></a>

```python
range_match: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

range_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#range_match NetworkServicesHttpRoute#range_match}

---

##### `regex_match`<sup>Optional</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

The value of the header must match the regular expression specified in regexMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

##### `suffix_match`<sup>Optional</sup> <a name="suffix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch"></a>

```python
suffix_match: str
```

- *Type:* str

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#suffix_match NetworkServicesHttpRoute#suffix_match}

---

### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end">end</a></code> | <code>typing.Union[int, float]</code> | End of the range (exclusive). |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Start of the range (inclusive). |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#end NetworkServicesHttpRoute#end}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#start NetworkServicesHttpRoute#start}

---

### NetworkServicesHttpRouteRulesMatchesQueryParameters <a name="NetworkServicesHttpRouteRulesMatchesQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters(
  exact_match: str = None,
  present_match: typing.Union[bool, IResolvable] = None,
  query_parameter: str = None,
  regex_match: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch">exact_match</a></code> | <code>str</code> | The value of the query parameter must exactly match the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch">present_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter">query_parameter</a></code> | <code>str</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch">regex_match</a></code> | <code>str</code> | The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. |

---

##### `exact_match`<sup>Optional</sup> <a name="exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch"></a>

```python
exact_match: str
```

- *Type:* str

The value of the query parameter must exactly match the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `present_match`<sup>Optional</sup> <a name="present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch"></a>

```python
present_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `query_parameter`<sup>Optional</sup> <a name="query_parameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter"></a>

```python
query_parameter: str
```

- *Type:* str

The name of the query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#query_parameter NetworkServicesHttpRoute#query_parameter}

---

##### `regex_match`<sup>Optional</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteTimeouts <a name="NetworkServicesHttpRouteTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials">reset_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders">reset_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods">reset_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes">reset_allow_origin_regexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins">reset_allow_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_credentials` <a name="reset_allow_credentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```python
def reset_allow_credentials() -> None
```

##### `reset_allow_headers` <a name="reset_allow_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```python
def reset_allow_headers() -> None
```

##### `reset_allow_methods` <a name="reset_allow_methods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods"></a>

```python
def reset_allow_methods() -> None
```

##### `reset_allow_origin_regexes` <a name="reset_allow_origin_regexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes"></a>

```python
def reset_allow_origin_regexes() -> None
```

##### `reset_allow_origins` <a name="reset_allow_origins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```python
def reset_allow_origins() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput">allow_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput">allow_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput">allow_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput">allow_origin_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput">allow_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes">allow_origin_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge">max_age</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials_input`<sup>Optional</sup> <a name="allow_credentials_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```python
allow_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers_input`<sup>Optional</sup> <a name="allow_headers_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```python
allow_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods_input`<sup>Optional</sup> <a name="allow_methods_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```python
allow_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origin_regexes_input`<sup>Optional</sup> <a name="allow_origin_regexes_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput"></a>

```python
allow_origin_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins_input`<sup>Optional</sup> <a name="allow_origins_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```python
allow_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```python
max_age_input: str
```

- *Type:* str

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origin_regexes`<sup>Required</sup> <a name="allow_origin_regexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes"></a>

```python
allow_origin_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge"></a>

```python
max_age: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---


### NetworkServicesHttpRouteRulesActionDestinationsList <a name="NetworkServicesHttpRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesHttpRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]

---


### NetworkServicesHttpRouteRulesActionDestinationsOutputReference <a name="NetworkServicesHttpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteRulesActionDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">reset_http_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_status` <a name="reset_http_status" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```python
def reset_http_status() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">http_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">http_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_status_input`<sup>Optional</sup> <a name="http_status_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```python
http_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_status`<sup>Required</sup> <a name="http_status" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```python
http_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">reset_fixed_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed_delay` <a name="reset_fixed_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```python
def reset_fixed_delay() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixed_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixed_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_delay_input`<sup>Optional</sup> <a name="fixed_delay_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```python
fixed_delay_input: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_delay`<sup>Required</sup> <a name="fixed_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```python
fixed_delay: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">put_abort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">put_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">reset_abort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">reset_delay</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abort` <a name="put_abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```python
def put_abort(
  http_status: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
) -> None
```

###### `http_status`<sup>Optional</sup> <a name="http_status" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.httpStatus"></a>

- *Type:* typing.Union[int, float]

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#http_status NetworkServicesHttpRoute#http_status}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

##### `put_delay` <a name="put_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```python
def put_delay(
  fixed_delay: str = None,
  percentage: typing.Union[int, float] = None
) -> None
```

###### `fixed_delay`<sup>Optional</sup> <a name="fixed_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.fixedDelay"></a>

- *Type:* str

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fixed_delay NetworkServicesHttpRoute#fixed_delay}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

##### `reset_abort` <a name="reset_abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```python
def reset_abort() -> None
```

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abort_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delay_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```python
abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```python
delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abort_input`<sup>Optional</sup> <a name="abort_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```python
abort_input: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```python
delay_input: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesHttpRouteRulesActionOutputReference <a name="NetworkServicesHttpRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy">put_cors_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy">put_fault_injection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect">put_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier">put_request_header_modifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy">put_request_mirror_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier">put_response_header_modifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite">put_url_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy">reset_cors_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy">reset_fault_injection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect">reset_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier">reset_request_header_modifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy">reset_request_mirror_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier">reset_response_header_modifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite">reset_url_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors_policy` <a name="put_cors_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy"></a>

```python
def put_cors_policy(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origin_regexes: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  disabled: typing.Union[bool, IResolvable] = None,
  expose_headers: typing.List[str] = None,
  max_age: str = None
) -> None
```

###### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.allowCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_credentials NetworkServicesHttpRoute#allow_credentials}

---

###### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.allowHeaders"></a>

- *Type:* typing.List[str]

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_headers NetworkServicesHttpRoute#allow_headers}

---

###### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.allowMethods"></a>

- *Type:* typing.List[str]

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_methods NetworkServicesHttpRoute#allow_methods}

---

###### `allow_origin_regexes`<sup>Optional</sup> <a name="allow_origin_regexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.allowOriginRegexes"></a>

- *Type:* typing.List[str]

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origin_regexes NetworkServicesHttpRoute#allow_origin_regexes}

---

###### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.allowOrigins"></a>

- *Type:* typing.List[str]

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#allow_origins NetworkServicesHttpRoute#allow_origins}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#disabled NetworkServicesHttpRoute#disabled}

---

###### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.exposeHeaders"></a>

- *Type:* typing.List[str]

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#expose_headers NetworkServicesHttpRoute#expose_headers}

---

###### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.maxAge"></a>

- *Type:* str

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#max_age NetworkServicesHttpRoute#max_age}

---

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]

---

##### `put_fault_injection_policy` <a name="put_fault_injection_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```python
def put_fault_injection_policy(
  abort: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort = None,
  delay: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay = None
) -> None
```

###### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.abort"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#abort NetworkServicesHttpRoute#abort}

---

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.delay"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#delay NetworkServicesHttpRoute#delay}

---

##### `put_redirect` <a name="put_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect"></a>

```python
def put_redirect(
  host_redirect: str = None,
  https_redirect: typing.Union[bool, IResolvable] = None,
  path_redirect: str = None,
  port_redirect: typing.Union[int, float] = None,
  prefix_rewrite: str = None,
  response_code: str = None,
  strip_query: typing.Union[bool, IResolvable] = None
) -> None
```

###### `host_redirect`<sup>Optional</sup> <a name="host_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.hostRedirect"></a>

- *Type:* str

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_redirect NetworkServicesHttpRoute#host_redirect}

---

###### `https_redirect`<sup>Optional</sup> <a name="https_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.httpsRedirect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#https_redirect NetworkServicesHttpRoute#https_redirect}

---

###### `path_redirect`<sup>Optional</sup> <a name="path_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.pathRedirect"></a>

- *Type:* str

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_redirect NetworkServicesHttpRoute#path_redirect}

---

###### `port_redirect`<sup>Optional</sup> <a name="port_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.portRedirect"></a>

- *Type:* typing.Union[int, float]

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#port_redirect NetworkServicesHttpRoute#port_redirect}

---

###### `prefix_rewrite`<sup>Optional</sup> <a name="prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.prefixRewrite"></a>

- *Type:* str

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#prefix_rewrite NetworkServicesHttpRoute#prefix_rewrite}

---

###### `response_code`<sup>Optional</sup> <a name="response_code" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.responseCode"></a>

- *Type:* str

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_code NetworkServicesHttpRoute#response_code}

---

###### `strip_query`<sup>Optional</sup> <a name="strip_query" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.stripQuery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#strip_query NetworkServicesHttpRoute#strip_query}

---

##### `put_request_header_modifier` <a name="put_request_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier"></a>

```python
def put_request_header_modifier(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.add"></a>

- *Type:* typing.Mapping[str]

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.remove"></a>

- *Type:* typing.List[str]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.set"></a>

- *Type:* typing.Mapping[str]

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

##### `put_request_mirror_policy` <a name="put_request_mirror_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy"></a>

```python
def put_request_mirror_policy(
  destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destination NetworkServicesHttpRoute#destination}

---

##### `put_response_header_modifier` <a name="put_response_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier"></a>

```python
def put_response_header_modifier(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.add"></a>

- *Type:* typing.Mapping[str]

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.remove"></a>

- *Type:* typing.List[str]

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.set"></a>

- *Type:* typing.Mapping[str]

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  num_retries: typing.Union[int, float] = None,
  per_try_timeout: str = None,
  retry_conditions: typing.List[str] = None
) -> None
```

###### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.numRetries"></a>

- *Type:* typing.Union[int, float]

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#num_retries NetworkServicesHttpRoute#num_retries}

---

###### `per_try_timeout`<sup>Optional</sup> <a name="per_try_timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.perTryTimeout"></a>

- *Type:* str

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#per_try_timeout NetworkServicesHttpRoute#per_try_timeout}

---

###### `retry_conditions`<sup>Optional</sup> <a name="retry_conditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.retryConditions"></a>

- *Type:* typing.List[str]

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_conditions NetworkServicesHttpRoute#retry_conditions}

---

##### `put_url_rewrite` <a name="put_url_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite"></a>

```python
def put_url_rewrite(
  host_rewrite: str = None,
  path_prefix_rewrite: str = None
) -> None
```

###### `host_rewrite`<sup>Optional</sup> <a name="host_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.hostRewrite"></a>

- *Type:* str

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#host_rewrite NetworkServicesHttpRoute#host_rewrite}

---

###### `path_prefix_rewrite`<sup>Optional</sup> <a name="path_prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.pathPrefixRewrite"></a>

- *Type:* str

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#path_prefix_rewrite NetworkServicesHttpRoute#path_prefix_rewrite}

---

##### `reset_cors_policy` <a name="reset_cors_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy"></a>

```python
def reset_cors_policy() -> None
```

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_fault_injection_policy` <a name="reset_fault_injection_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```python
def reset_fault_injection_policy() -> None
```

##### `reset_redirect` <a name="reset_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect"></a>

```python
def reset_redirect() -> None
```

##### `reset_request_header_modifier` <a name="reset_request_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier"></a>

```python
def reset_request_header_modifier() -> None
```

##### `reset_request_mirror_policy` <a name="reset_request_mirror_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy"></a>

```python
def reset_request_mirror_policy() -> None
```

##### `reset_response_header_modifier` <a name="reset_response_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier"></a>

```python
def reset_response_header_modifier() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_url_rewrite` <a name="reset_url_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite"></a>

```python
def reset_url_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy">cors_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy">fault_injection_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier">request_header_modifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy">request_mirror_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier">response_header_modifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite">url_rewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput">cors_policy_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput">fault_injection_policy_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput">redirect_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput">request_header_modifier_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput">request_mirror_policy_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput">response_header_modifier_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput">url_rewrite_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors_policy`<sup>Required</sup> <a name="cors_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy"></a>

```python
cors_policy: NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations"></a>

```python
destinations: NetworkServicesHttpRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a>

---

##### `fault_injection_policy`<sup>Required</sup> <a name="fault_injection_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```python
fault_injection_policy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect"></a>

```python
redirect: NetworkServicesHttpRouteRulesActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a>

---

##### `request_header_modifier`<sup>Required</sup> <a name="request_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier"></a>

```python
request_header_modifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a>

---

##### `request_mirror_policy`<sup>Required</sup> <a name="request_mirror_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy"></a>

```python
request_mirror_policy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a>

---

##### `response_header_modifier`<sup>Required</sup> <a name="response_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier"></a>

```python
response_header_modifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy"></a>

```python
retry_policy: NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a>

---

##### `url_rewrite`<sup>Required</sup> <a name="url_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite"></a>

```python
url_rewrite: NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a>

---

##### `cors_policy_input`<sup>Optional</sup> <a name="cors_policy_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput"></a>

```python
cors_policy_input: NetworkServicesHttpRouteRulesActionCorsPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]

---

##### `fault_injection_policy_input`<sup>Optional</sup> <a name="fault_injection_policy_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```python
fault_injection_policy_input: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `redirect_input`<sup>Optional</sup> <a name="redirect_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput"></a>

```python
redirect_input: NetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `request_header_modifier_input`<sup>Optional</sup> <a name="request_header_modifier_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput"></a>

```python
request_header_modifier_input: NetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `request_mirror_policy_input`<sup>Optional</sup> <a name="request_mirror_policy_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput"></a>

```python
request_mirror_policy_input: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `response_header_modifier_input`<sup>Optional</sup> <a name="response_header_modifier_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput"></a>

```python
response_header_modifier_input: NetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: NetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `url_rewrite_input`<sup>Optional</sup> <a name="url_rewrite_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput"></a>

```python
url_rewrite_input: NetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---


### NetworkServicesHttpRouteRulesActionRedirectOutputReference <a name="NetworkServicesHttpRouteRulesActionRedirectOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect">reset_host_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect">reset_https_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect">reset_path_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect">reset_port_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite">reset_prefix_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode">reset_response_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery">reset_strip_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_redirect` <a name="reset_host_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect"></a>

```python
def reset_host_redirect() -> None
```

##### `reset_https_redirect` <a name="reset_https_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect"></a>

```python
def reset_https_redirect() -> None
```

##### `reset_path_redirect` <a name="reset_path_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect"></a>

```python
def reset_path_redirect() -> None
```

##### `reset_port_redirect` <a name="reset_port_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect"></a>

```python
def reset_port_redirect() -> None
```

##### `reset_prefix_rewrite` <a name="reset_prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite"></a>

```python
def reset_prefix_rewrite() -> None
```

##### `reset_response_code` <a name="reset_response_code" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode"></a>

```python
def reset_response_code() -> None
```

##### `reset_strip_query` <a name="reset_strip_query" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery"></a>

```python
def reset_strip_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput">host_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput">https_redirect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput">path_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput">port_redirect_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput">prefix_rewrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput">strip_query_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect">host_redirect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect">https_redirect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect">path_redirect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect">port_redirect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite">prefix_rewrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode">response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery">strip_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_redirect_input`<sup>Optional</sup> <a name="host_redirect_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput"></a>

```python
host_redirect_input: str
```

- *Type:* str

---

##### `https_redirect_input`<sup>Optional</sup> <a name="https_redirect_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput"></a>

```python
https_redirect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_redirect_input`<sup>Optional</sup> <a name="path_redirect_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput"></a>

```python
path_redirect_input: str
```

- *Type:* str

---

##### `port_redirect_input`<sup>Optional</sup> <a name="port_redirect_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput"></a>

```python
port_redirect_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_rewrite_input`<sup>Optional</sup> <a name="prefix_rewrite_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput"></a>

```python
prefix_rewrite_input: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput"></a>

```python
response_code_input: str
```

- *Type:* str

---

##### `strip_query_input`<sup>Optional</sup> <a name="strip_query_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput"></a>

```python
strip_query_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_redirect`<sup>Required</sup> <a name="host_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect"></a>

```python
host_redirect: str
```

- *Type:* str

---

##### `https_redirect`<sup>Required</sup> <a name="https_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect"></a>

```python
https_redirect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_redirect`<sup>Required</sup> <a name="path_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect"></a>

```python
path_redirect: str
```

- *Type:* str

---

##### `port_redirect`<sup>Required</sup> <a name="port_redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect"></a>

```python
port_redirect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_rewrite`<sup>Required</sup> <a name="prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite"></a>

```python
prefix_rewrite: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode"></a>

```python
response_code: str
```

- *Type:* str

---

##### `strip_query`<sup>Required</sup> <a name="strip_query" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery"></a>

```python
strip_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionRedirect
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---


### NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionRequestHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination"></a>

```python
def put_destination(
  service_name: str = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.serviceName"></a>

- *Type:* str

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination"></a>

```python
destination: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput"></a>

```python
destination_input: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---


### NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionResponseHeaderModifier
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries">reset_num_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout">reset_per_try_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">reset_retry_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_num_retries` <a name="reset_num_retries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```python
def reset_num_retries() -> None
```

##### `reset_per_try_timeout` <a name="reset_per_try_timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout"></a>

```python
def reset_per_try_timeout() -> None
```

##### `reset_retry_conditions` <a name="reset_retry_conditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```python
def reset_retry_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">num_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput">per_try_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retry_conditions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout">per_try_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retry_conditions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_retries_input`<sup>Optional</sup> <a name="num_retries_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```python
num_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_try_timeout_input`<sup>Optional</sup> <a name="per_try_timeout_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput"></a>

```python
per_try_timeout_input: str
```

- *Type:* str

---

##### `retry_conditions_input`<sup>Optional</sup> <a name="retry_conditions_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```python
retry_conditions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `num_retries`<sup>Required</sup> <a name="num_retries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_try_timeout`<sup>Required</sup> <a name="per_try_timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout"></a>

```python
per_try_timeout: str
```

- *Type:* str

---

##### `retry_conditions`<sup>Required</sup> <a name="retry_conditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```python
retry_conditions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---


### NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference <a name="NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite">reset_host_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite">reset_path_prefix_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host_rewrite` <a name="reset_host_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite"></a>

```python
def reset_host_rewrite() -> None
```

##### `reset_path_prefix_rewrite` <a name="reset_path_prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```python
def reset_path_prefix_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput">host_rewrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">path_prefix_rewrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite">host_rewrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite">path_prefix_rewrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_rewrite_input`<sup>Optional</sup> <a name="host_rewrite_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```python
host_rewrite_input: str
```

- *Type:* str

---

##### `path_prefix_rewrite_input`<sup>Optional</sup> <a name="path_prefix_rewrite_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```python
path_prefix_rewrite_input: str
```

- *Type:* str

---

##### `host_rewrite`<sup>Required</sup> <a name="host_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite"></a>

```python
host_rewrite: str
```

- *Type:* str

---

##### `path_prefix_rewrite`<sup>Required</sup> <a name="path_prefix_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```python
path_prefix_rewrite: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesActionUrlRewrite
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---


### NetworkServicesHttpRouteRulesList <a name="NetworkServicesHttpRouteRulesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesHttpRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]]

---


### NetworkServicesHttpRouteRulesMatchesHeadersList <a name="NetworkServicesHttpRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesHttpRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]

---


### NetworkServicesHttpRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch">put_range_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch">reset_exact_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch">reset_invert_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch">reset_prefix_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch">reset_present_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch">reset_range_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch">reset_regex_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch">reset_suffix_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range_match` <a name="put_range_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch"></a>

```python
def put_range_match(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.end"></a>

- *Type:* typing.Union[int, float]

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#end NetworkServicesHttpRoute#end}

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.start"></a>

- *Type:* typing.Union[int, float]

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#start NetworkServicesHttpRoute#start}

---

##### `reset_exact_match` <a name="reset_exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch"></a>

```python
def reset_exact_match() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_invert_match` <a name="reset_invert_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch"></a>

```python
def reset_invert_match() -> None
```

##### `reset_prefix_match` <a name="reset_prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch"></a>

```python
def reset_prefix_match() -> None
```

##### `reset_present_match` <a name="reset_present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch"></a>

```python
def reset_present_match() -> None
```

##### `reset_range_match` <a name="reset_range_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch"></a>

```python
def reset_range_match() -> None
```

##### `reset_regex_match` <a name="reset_regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch"></a>

```python
def reset_regex_match() -> None
```

##### `reset_suffix_match` <a name="reset_suffix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch"></a>

```python
def reset_suffix_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch">range_match</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput">exact_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput">invert_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput">prefix_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput">present_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput">range_match_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput">regex_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput">suffix_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch">exact_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch">invert_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch">prefix_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch">present_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch">regex_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch">suffix_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range_match`<sup>Required</sup> <a name="range_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch"></a>

```python
range_match: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a>

---

##### `exact_match_input`<sup>Optional</sup> <a name="exact_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput"></a>

```python
exact_match_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `invert_match_input`<sup>Optional</sup> <a name="invert_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput"></a>

```python
invert_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_match_input`<sup>Optional</sup> <a name="prefix_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput"></a>

```python
prefix_match_input: str
```

- *Type:* str

---

##### `present_match_input`<sup>Optional</sup> <a name="present_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput"></a>

```python
present_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `range_match_input`<sup>Optional</sup> <a name="range_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput"></a>

```python
range_match_input: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `regex_match_input`<sup>Optional</sup> <a name="regex_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput"></a>

```python
regex_match_input: str
```

- *Type:* str

---

##### `suffix_match_input`<sup>Optional</sup> <a name="suffix_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput"></a>

```python
suffix_match_input: str
```

- *Type:* str

---

##### `exact_match`<sup>Required</sup> <a name="exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch"></a>

```python
exact_match: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `invert_match`<sup>Required</sup> <a name="invert_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch"></a>

```python
invert_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_match`<sup>Required</sup> <a name="prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch"></a>

```python
prefix_match: str
```

- *Type:* str

---

##### `present_match`<sup>Required</sup> <a name="present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch"></a>

```python
present_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

---

##### `suffix_match`<sup>Required</sup> <a name="suffix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch"></a>

```python
suffix_match: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteRulesMatchesHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]

---


### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---


### NetworkServicesHttpRouteRulesMatchesList <a name="NetworkServicesHttpRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesHttpRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]

---


### NetworkServicesHttpRouteRulesMatchesOutputReference <a name="NetworkServicesHttpRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters">put_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch">reset_full_path_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase">reset_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch">reset_prefix_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters">reset_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch">reset_regex_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]

---

##### `put_query_parameters` <a name="put_query_parameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters"></a>

```python
def put_query_parameters(
  value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesQueryParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]

---

##### `reset_full_path_match` <a name="reset_full_path_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch"></a>

```python
def reset_full_path_match() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ignore_case` <a name="reset_ignore_case" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase"></a>

```python
def reset_ignore_case() -> None
```

##### `reset_prefix_match` <a name="reset_prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch"></a>

```python
def reset_prefix_match() -> None
```

##### `reset_query_parameters` <a name="reset_query_parameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters"></a>

```python
def reset_query_parameters() -> None
```

##### `reset_regex_match` <a name="reset_regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch"></a>

```python
def reset_regex_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters">query_parameters</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput">full_path_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput">ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput">prefix_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput">query_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput">regex_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch">full_path_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase">ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch">prefix_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch">regex_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers"></a>

```python
headers: NetworkServicesHttpRouteRulesMatchesHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a>

---

##### `query_parameters`<sup>Required</sup> <a name="query_parameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters"></a>

```python
query_parameters: NetworkServicesHttpRouteRulesMatchesQueryParametersList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a>

---

##### `full_path_match_input`<sup>Optional</sup> <a name="full_path_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput"></a>

```python
full_path_match_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>]]

---

##### `ignore_case_input`<sup>Optional</sup> <a name="ignore_case_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput"></a>

```python
ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_match_input`<sup>Optional</sup> <a name="prefix_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput"></a>

```python
prefix_match_input: str
```

- *Type:* str

---

##### `query_parameters_input`<sup>Optional</sup> <a name="query_parameters_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput"></a>

```python
query_parameters_input: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesQueryParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]

---

##### `regex_match_input`<sup>Optional</sup> <a name="regex_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput"></a>

```python
regex_match_input: str
```

- *Type:* str

---

##### `full_path_match`<sup>Required</sup> <a name="full_path_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch"></a>

```python
full_path_match: str
```

- *Type:* str

---

##### `ignore_case`<sup>Required</sup> <a name="ignore_case" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase"></a>

```python
ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_match`<sup>Required</sup> <a name="prefix_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch"></a>

```python
prefix_match: str
```

- *Type:* str

---

##### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteRulesMatches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersList <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatchesQueryParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]]

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch">reset_exact_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch">reset_present_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter">reset_query_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch">reset_regex_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact_match` <a name="reset_exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch"></a>

```python
def reset_exact_match() -> None
```

##### `reset_present_match` <a name="reset_present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch"></a>

```python
def reset_present_match() -> None
```

##### `reset_query_parameter` <a name="reset_query_parameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter"></a>

```python
def reset_query_parameter() -> None
```

##### `reset_regex_match` <a name="reset_regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch"></a>

```python
def reset_regex_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput">exact_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput">present_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput">query_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput">regex_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch">exact_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch">present_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter">query_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch">regex_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_match_input`<sup>Optional</sup> <a name="exact_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput"></a>

```python
exact_match_input: str
```

- *Type:* str

---

##### `present_match_input`<sup>Optional</sup> <a name="present_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput"></a>

```python
present_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_parameter_input`<sup>Optional</sup> <a name="query_parameter_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput"></a>

```python
query_parameter_input: str
```

- *Type:* str

---

##### `regex_match_input`<sup>Optional</sup> <a name="regex_match_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput"></a>

```python
regex_match_input: str
```

- *Type:* str

---

##### `exact_match`<sup>Required</sup> <a name="exact_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch"></a>

```python
exact_match: str
```

- *Type:* str

---

##### `present_match`<sup>Required</sup> <a name="present_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch"></a>

```python
present_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_parameter`<sup>Required</sup> <a name="query_parameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter"></a>

```python
query_parameter: str
```

- *Type:* str

---

##### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteRulesMatchesQueryParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>]

---


### NetworkServicesHttpRouteRulesOutputReference <a name="NetworkServicesHttpRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches">put_matches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches">reset_matches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction"></a>

```python
def put_action(
  cors_policy: NetworkServicesHttpRouteRulesActionCorsPolicy = None,
  destinations: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesActionDestinations]] = None,
  fault_injection_policy: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy = None,
  redirect: NetworkServicesHttpRouteRulesActionRedirect = None,
  request_header_modifier: NetworkServicesHttpRouteRulesActionRequestHeaderModifier = None,
  request_mirror_policy: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy = None,
  response_header_modifier: NetworkServicesHttpRouteRulesActionResponseHeaderModifier = None,
  retry_policy: NetworkServicesHttpRouteRulesActionRetryPolicy = None,
  timeout: str = None,
  url_rewrite: NetworkServicesHttpRouteRulesActionUrlRewrite = None
) -> None
```

###### `cors_policy`<sup>Optional</sup> <a name="cors_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.corsPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#cors_policy NetworkServicesHttpRoute#cors_policy}

---

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.destinations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#destinations NetworkServicesHttpRoute#destinations}

---

###### `fault_injection_policy`<sup>Optional</sup> <a name="fault_injection_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.faultInjectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#fault_injection_policy NetworkServicesHttpRoute#fault_injection_policy}

---

###### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.redirect"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#redirect NetworkServicesHttpRoute#redirect}

---

###### `request_header_modifier`<sup>Optional</sup> <a name="request_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.requestHeaderModifier"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_header_modifier NetworkServicesHttpRoute#request_header_modifier}

---

###### `request_mirror_policy`<sup>Optional</sup> <a name="request_mirror_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.requestMirrorPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#request_mirror_policy NetworkServicesHttpRoute#request_mirror_policy}

---

###### `response_header_modifier`<sup>Optional</sup> <a name="response_header_modifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.responseHeaderModifier"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#response_header_modifier NetworkServicesHttpRoute#response_header_modifier}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#retry_policy NetworkServicesHttpRoute#retry_policy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.timeout"></a>

- *Type:* str

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#timeout NetworkServicesHttpRoute#timeout}

---

###### `url_rewrite`<sup>Optional</sup> <a name="url_rewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.urlRewrite"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/network_services_http_route#url_rewrite NetworkServicesHttpRoute#url_rewrite}

---

##### `put_matches` <a name="put_matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches"></a>

```python
def put_matches(
  value: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_matches` <a name="reset_matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches"></a>

```python
def reset_matches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput">matches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action"></a>

```python
action: NetworkServicesHttpRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches"></a>

```python
matches: NetworkServicesHttpRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput"></a>

```python
action_input: NetworkServicesHttpRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---

##### `matches_input`<sup>Optional</sup> <a name="matches_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput"></a>

```python
matches_input: typing.Union[IResolvable, typing.List[NetworkServicesHttpRouteRulesMatches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>]

---


### NetworkServicesHttpRouteTimeoutsOutputReference <a name="NetworkServicesHttpRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_http_route

networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesHttpRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>]

---



