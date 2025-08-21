# `dataGoogleMonitoringClusterIstioService` Submodule <a name="`dataGoogleMonitoringClusterIstioService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringClusterIstioService <a name="DataGoogleMonitoringClusterIstioService" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service google_monitoring_cluster_istio_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  location: str,
  service_name: str,
  service_namespace: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.serviceNamespace">service_namespace</a></code> | <code>str</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the clusterName resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#cluster_name DataGoogleMonitoringClusterIstioService#cluster_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.location"></a>

- *Type:* str

The location of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the location resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#location DataGoogleMonitoringClusterIstioService#location}

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.serviceName"></a>

- *Type:* str

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#service_name DataGoogleMonitoringClusterIstioService#service_name}

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.serviceNamespace"></a>

- *Type:* str

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#service_namespace DataGoogleMonitoringClusterIstioService#service_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringClusterIstioService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleMonitoringClusterIstioService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleMonitoringClusterIstioService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleMonitoringClusterIstioService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringClusterIstioService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList">DataGoogleMonitoringClusterIstioServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.userLabels">user_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespaceInput">service_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.telemetry"></a>

```python
telemetry: DataGoogleMonitoringClusterIstioServiceTelemetryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList">DataGoogleMonitoringClusterIstioServiceTelemetryList</a>

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.userLabels"></a>

```python
user_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_namespace_input`<sup>Optional</sup> <a name="service_namespace_input" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespaceInput"></a>

```python
service_namespace_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringClusterIstioServiceConfig <a name="DataGoogleMonitoringClusterIstioServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  location: str,
  service_name: str,
  service_namespace: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.location">location</a></code> | <code>str</code> | The location of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceName">service_name</a></code> | <code>str</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the clusterName resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#cluster_name DataGoogleMonitoringClusterIstioService#cluster_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the location resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#location DataGoogleMonitoringClusterIstioService#location}

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#service_name DataGoogleMonitoringClusterIstioService#service_name}

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#service_namespace DataGoogleMonitoringClusterIstioService#service_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}.

---

### DataGoogleMonitoringClusterIstioServiceTelemetry <a name="DataGoogleMonitoringClusterIstioServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringClusterIstioServiceTelemetryList <a name="DataGoogleMonitoringClusterIstioServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference <a name="DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_cluster_istio_service

dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry">DataGoogleMonitoringClusterIstioServiceTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMonitoringClusterIstioServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry">DataGoogleMonitoringClusterIstioServiceTelemetry</a>

---



