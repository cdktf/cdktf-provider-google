# `computeNetworkPeeringRoutesConfig` Submodule <a name="`computeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkPeeringRoutesConfig <a name="ComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_custom_routes: typing.Union[bool, IResolvable],
  import_custom_routes: typing.Union[bool, IResolvable],
  network: str,
  peering: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeNetworkPeeringRoutesConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.peering">peering</a></code> | <code>str</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_custom_routes`<sup>Required</sup> <a name="export_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.exportCustomRoutes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#export_custom_routes ComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `import_custom_routes`<sup>Required</sup> <a name="import_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.importCustomRoutes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#import_custom_routes ComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.network"></a>

- *Type:* str

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#network ComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.peering"></a>

- *Type:* str

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#peering ComputeNetworkPeeringRoutesConfig#peering}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#timeouts ComputeNetworkPeeringRoutesConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNetworkPeeringRoutesConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">export_custom_routes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">import_custom_routes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput">peering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering">peering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `export_custom_routes_input`<sup>Optional</sup> <a name="export_custom_routes_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```python
export_custom_routes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_custom_routes_input`<sup>Optional</sup> <a name="import_custom_routes_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```python
import_custom_routes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `peering_input`<sup>Optional</sup> <a name="peering_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```python
peering_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNetworkPeeringRoutesConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>]

---

##### `export_custom_routes`<sup>Required</sup> <a name="export_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```python
export_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_custom_routes`<sup>Required</sup> <a name="import_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```python
import_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.peering"></a>

```python
peering: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkPeeringRoutesConfigConfig <a name="ComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_custom_routes: typing.Union[bool, IResolvable],
  import_custom_routes: typing.Union[bool, IResolvable],
  network: str,
  peering: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeNetworkPeeringRoutesConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">export_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">import_custom_routes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network">network</a></code> | <code>str</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering">peering</a></code> | <code>str</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_custom_routes`<sup>Required</sup> <a name="export_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```python
export_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#export_custom_routes ComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `import_custom_routes`<sup>Required</sup> <a name="import_custom_routes" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```python
import_custom_routes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#import_custom_routes ComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#network ComputeNetworkPeeringRoutesConfig#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```python
peering: str
```

- *Type:* str

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#peering ComputeNetworkPeeringRoutesConfig#peering}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkPeeringRoutesConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#timeouts ComputeNetworkPeeringRoutesConfig#timeouts}

---

### ComputeNetworkPeeringRoutesConfigTimeouts <a name="ComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_peering_routes_config

computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkPeeringRoutesConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkPeeringRoutesConfig.ComputeNetworkPeeringRoutesConfigTimeouts">ComputeNetworkPeeringRoutesConfigTimeouts</a>]

---



