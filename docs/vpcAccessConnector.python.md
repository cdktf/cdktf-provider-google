# `vpcAccessConnector` Submodule <a name="`vpcAccessConnector` Submodule" id="@cdktf/provider-google.vpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcAccessConnector <a name="VpcAccessConnector" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnector(
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
  id: str = None,
  ip_cidr_range: str = None,
  machine_type: str = None,
  max_instances: typing.Union[int, float] = None,
  max_throughput: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_throughput: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  region: str = None,
  subnet: VpcAccessConnectorSubnet = None,
  timeouts: VpcAccessConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | Minimum throughput of the connector in Mbps. Default and min is 200. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.network">network</a></code> | <code>str</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.name"></a>

- *Type:* str

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.machineType"></a>

- *Type:* str

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.maxThroughput"></a>

- *Type:* typing.Union[int, float]

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `min_throughput`<sup>Optional</sup> <a name="min_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.minThroughput"></a>

- *Type:* typing.Union[int, float]

Minimum throughput of the connector in Mbps. Default and min is 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.network"></a>

- *Type:* str

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#network VpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.region"></a>

- *Type:* str

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#region VpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet">put_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange">reset_ip_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput">reset_max_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput">reset_min_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subnet` <a name="put_subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet"></a>

```python
def put_subnet(
  name: str = None,
  project_id: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet.parameter.name"></a>

- *Type:* str

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet.parameter.projectId"></a>

- *Type:* str

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project_id VpcAccessConnector#project_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_cidr_range` <a name="reset_ip_cidr_range" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange"></a>

```python
def reset_ip_cidr_range() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_max_throughput` <a name="reset_max_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput"></a>

```python
def reset_max_throughput() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_min_throughput` <a name="reset_min_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput"></a>

```python
def reset_min_throughput() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcAccessConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcAccessConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcAccessConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects">connected_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput">max_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput">min_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput">subnet_input</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connected_projects`<sup>Required</sup> <a name="connected_projects" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connectedProjects"></a>

```python
connected_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet"></a>

```python
subnet: VpcAccessConnectorSubnetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts"></a>

```python
timeouts: VpcAccessConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_throughput_input`<sup>Optional</sup> <a name="max_throughput_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput"></a>

```python
max_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_throughput_input`<sup>Optional</sup> <a name="min_throughput_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput"></a>

```python
min_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput"></a>

```python
subnet_input: VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpcAccessConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_throughput`<sup>Required</sup> <a name="max_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_throughput`<sup>Required</sup> <a name="min_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput"></a>

```python
min_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcAccessConnectorConfig <a name="VpcAccessConnectorConfig" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  ip_cidr_range: str = None,
  machine_type: str = None,
  max_instances: typing.Union[int, float] = None,
  max_throughput: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_throughput: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  region: str = None,
  subnet: VpcAccessConnectorSubnet = None,
  timeouts: VpcAccessConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name">name</a></code> | <code>str</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType">machine_type</a></code> | <code>str</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | Minimum throughput of the connector in Mbps. Default and min is 200. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network">network</a></code> | <code>str</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region">region</a></code> | <code>str</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `min_throughput`<sup>Optional</sup> <a name="min_throughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput"></a>

```python
min_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum throughput of the connector in Mbps. Default and min is 200.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#network VpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#region VpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet"></a>

```python
subnet: VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts"></a>

```python
timeouts: VpcAccessConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

### VpcAccessConnectorSubnet <a name="VpcAccessConnectorSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnectorSubnet(
  name: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name">name</a></code> | <code>str</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId">project_id</a></code> | <code>str</code> | Project in which the subnet exists. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name"></a>

```python
name: str
```

- *Type:* str

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#name VpcAccessConnector#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#project_id VpcAccessConnector#project_id}

---

### VpcAccessConnectorTimeouts <a name="VpcAccessConnectorTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnectorTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#create VpcAccessConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vpc_access_connector#delete VpcAccessConnector#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcAccessConnectorSubnetOutputReference <a name="VpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnectorSubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```python
internal_value: VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---


### VpcAccessConnectorTimeoutsOutputReference <a name="VpcAccessConnectorTimeoutsOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vpc_access_connector

vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcAccessConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>]

---



