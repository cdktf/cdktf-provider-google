# `google_container_attached_cluster`

Refer to the Terraform Registory for docs: [`google_container_attached_cluster`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster).

# `containerAttachedCluster` Submodule <a name="`containerAttachedCluster` Submodule" id="@cdktf/provider-google.containerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAttachedCluster <a name="ContainerAttachedCluster" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution: str,
  fleet: ContainerAttachedClusterFleet,
  location: str,
  name: str,
  oidc_config: ContainerAttachedClusterOidcConfig,
  platform_version: str,
  annotations: typing.Mapping[str] = None,
  authorization: ContainerAttachedClusterAuthorization = None,
  binary_authorization: ContainerAttachedClusterBinaryAuthorization = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_config: ContainerAttachedClusterLoggingConfig = None,
  monitoring_config: ContainerAttachedClusterMonitoringConfig = None,
  project: str = None,
  timeouts: ContainerAttachedClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.distribution">distribution</a></code> | <code>str</code> | The Kubernetes distribution of the underlying attached cluster. Supported values: "eks", "aks". |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine what flags to send on delete. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.distribution"></a>

- *Type:* str

The Kubernetes distribution of the underlying attached cluster. Supported values: "eks", "aks".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#distribution ContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#fleet ContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#location ContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#oidc_config ContainerAttachedCluster#oidc_config}

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.platformVersion"></a>

- *Type:* str

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#platform_version ContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#annotations ContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#authorization ContainerAttachedCluster#authorization}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#binary_authorization ContainerAttachedCluster#binary_authorization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine what flags to send on delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#deletion_policy ContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.description"></a>

- *Type:* str

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#description ContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#logging_config ContainerAttachedCluster#logging_config}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.monitoringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#monitoring_config ContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#timeouts ContainerAttachedCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization">put_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig">put_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig">put_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization">reset_binary_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig">reset_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_users: typing.List[str] = None
) -> None
```

###### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* typing.List[str]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#admin_users ContainerAttachedCluster#admin_users}

---

##### `put_binary_authorization` <a name="put_binary_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization"></a>

```python
def put_binary_authorization(
  evaluation_mode: str = None
) -> None
```

###### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putBinaryAuthorization.parameter.evaluationMode"></a>

- *Type:* str

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#evaluation_mode ContainerAttachedCluster#evaluation_mode}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet"></a>

```python
def put_fleet(
  project: str
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putFleet.parameter.project"></a>

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig"></a>

```python
def put_logging_config(
  component_config: ContainerAttachedClusterLoggingConfigComponentConfig = None
) -> None
```

###### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putLoggingConfig.parameter.componentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#component_config ContainerAttachedCluster#component_config}

---

##### `put_monitoring_config` <a name="put_monitoring_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig"></a>

```python
def put_monitoring_config(
  managed_prometheus_config: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig = None
) -> None
```

###### `managed_prometheus_config`<sup>Optional</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putMonitoringConfig.parameter.managedPrometheusConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#managed_prometheus_config ContainerAttachedCluster#managed_prometheus_config}

---

##### `put_oidc_config` <a name="put_oidc_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig"></a>

```python
def put_oidc_config(
  issuer_url: str,
  jwks: str = None
) -> None
```

###### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig.parameter.issuerUrl"></a>

- *Type:* str

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#issuer_url ContainerAttachedCluster#issuer_url}

---

###### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putOidcConfig.parameter.jwks"></a>

- *Type:* str

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#jwks ContainerAttachedCluster#jwks}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_binary_authorization` <a name="reset_binary_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetBinaryAuthorization"></a>

```python
def reset_binary_authorization() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_monitoring_config` <a name="reset_monitoring_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetMonitoringConfig"></a>

```python
def reset_monitoring_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion">cluster_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig">workload_identity_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput">binary_authorization_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput">distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput">monitoring_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput">oidc_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorization"></a>

```python
authorization: ContainerAttachedClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference">ContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `binary_authorization`<sup>Required</sup> <a name="binary_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorization"></a>

```python
binary_authorization: ContainerAttachedClusterBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference">ContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `cluster_region`<sup>Required</sup> <a name="cluster_region" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.clusterRegion"></a>

```python
cluster_region: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.errors"></a>

```python
errors: ContainerAttachedClusterErrorsList
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList">ContainerAttachedClusterErrorsList</a>

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleet"></a>

```python
fleet: ContainerAttachedClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference">ContainerAttachedClusterFleetOutputReference</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfig"></a>

```python
logging_config: ContainerAttachedClusterLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference">ContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `monitoring_config`<sup>Required</sup> <a name="monitoring_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfig"></a>

```python
monitoring_config: ContainerAttachedClusterMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference">ContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfig"></a>

```python
oidc_config: ContainerAttachedClusterOidcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference">ContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeouts"></a>

```python
timeouts: ContainerAttachedClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference">ContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workload_identity_config`<sup>Required</sup> <a name="workload_identity_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.workloadIdentityConfig"></a>

```python
workload_identity_config: ContainerAttachedClusterWorkloadIdentityConfigList
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList">ContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.authorizationInput"></a>

```python
authorization_input: ContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---

##### `binary_authorization_input`<sup>Optional</sup> <a name="binary_authorization_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```python
binary_authorization_input: ContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `distribution_input`<sup>Optional</sup> <a name="distribution_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distributionInput"></a>

```python
distribution_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.fleetInput"></a>

```python
fleet_input: ContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.loggingConfigInput"></a>

```python
logging_config_input: ContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---

##### `monitoring_config_input`<sup>Optional</sup> <a name="monitoring_config_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.monitoringConfigInput"></a>

```python
monitoring_config_input: ContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oidc_config_input`<sup>Optional</sup> <a name="oidc_config_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.oidcConfigInput"></a>

```python
oidc_config_input: ContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAttachedClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAttachedClusterAuthorization <a name="ContainerAttachedClusterAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterAuthorization(
  admin_users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | Users that can perform operations as a cluster admin. |

---

##### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#admin_users ContainerAttachedCluster#admin_users}

---

### ContainerAttachedClusterBinaryAuthorization <a name="ContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization(
  evaluation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#evaluation_mode ContainerAttachedCluster#evaluation_mode}

---

### ContainerAttachedClusterConfig <a name="ContainerAttachedClusterConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution: str,
  fleet: ContainerAttachedClusterFleet,
  location: str,
  name: str,
  oidc_config: ContainerAttachedClusterOidcConfig,
  platform_version: str,
  annotations: typing.Mapping[str] = None,
  authorization: ContainerAttachedClusterAuthorization = None,
  binary_authorization: ContainerAttachedClusterBinaryAuthorization = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  logging_config: ContainerAttachedClusterLoggingConfig = None,
  monitoring_config: ContainerAttachedClusterMonitoringConfig = None,
  project: str = None,
  timeouts: ContainerAttachedClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution">distribution</a></code> | <code>str</code> | The Kubernetes distribution of the underlying attached cluster. Supported values: "eks", "aks". |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization">binary_authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine what flags to send on delete. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description">description</a></code> | <code>str</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

The Kubernetes distribution of the underlying attached cluster. Supported values: "eks", "aks".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#distribution ContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.fleet"></a>

```python
fleet: ContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#fleet ContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#location ContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.oidcConfig"></a>

```python
oidc_config: ContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#oidc_config ContainerAttachedCluster#oidc_config}

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#platform_version ContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#annotations ContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.authorization"></a>

```python
authorization: ContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#authorization ContainerAttachedCluster#authorization}

---

##### `binary_authorization`<sup>Optional</sup> <a name="binary_authorization" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```python
binary_authorization: ContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#binary_authorization ContainerAttachedCluster#binary_authorization}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine what flags to send on delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#deletion_policy ContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#description ContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.loggingConfig"></a>

```python
logging_config: ContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#logging_config ContainerAttachedCluster#logging_config}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.monitoringConfig"></a>

```python
monitoring_config: ContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#monitoring_config ContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterConfig.property.timeouts"></a>

```python
timeouts: ContainerAttachedClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#timeouts ContainerAttachedCluster#timeouts}

---

### ContainerAttachedClusterErrors <a name="ContainerAttachedClusterErrors" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterErrors()
```


### ContainerAttachedClusterFleet <a name="ContainerAttachedClusterFleet" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterFleet(
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project">project</a></code> | <code>str</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}

---

### ContainerAttachedClusterLoggingConfig <a name="ContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterLoggingConfig(
  component_config: ContainerAttachedClusterLoggingConfigComponentConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `component_config`<sup>Optional</sup> <a name="component_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```python
component_config: ContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#component_config ContainerAttachedCluster#component_config}

---

### ContainerAttachedClusterLoggingConfigComponentConfig <a name="ContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig(
  enable_components: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#enable_components ContainerAttachedCluster#enable_components}

---

### ContainerAttachedClusterMonitoringConfig <a name="ContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterMonitoringConfig(
  managed_prometheus_config: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">managed_prometheus_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `managed_prometheus_config`<sup>Optional</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```python
managed_prometheus_config: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#managed_prometheus_config ContainerAttachedCluster#managed_prometheus_config}

---

### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Managed Collection. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#enabled ContainerAttachedCluster#enabled}

---

### ContainerAttachedClusterOidcConfig <a name="ContainerAttachedClusterOidcConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterOidcConfig(
  issuer_url: str,
  jwks: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl">issuer_url</a></code> | <code>str</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks">jwks</a></code> | <code>str</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#issuer_url ContainerAttachedCluster#issuer_url}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig.property.jwks"></a>

```python
jwks: str
```

- *Type:* str

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#jwks ContainerAttachedCluster#jwks}

---

### ContainerAttachedClusterTimeouts <a name="ContainerAttachedClusterTimeouts" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}.

---

### ContainerAttachedClusterWorkloadIdentityConfig <a name="ContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAttachedClusterAuthorizationOutputReference <a name="ContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">reset_admin_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_users` <a name="reset_admin_users" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```python
def reset_admin_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterAuthorization">ContainerAttachedClusterAuthorization</a>

---


### ContainerAttachedClusterBinaryAuthorizationOutputReference <a name="ContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">reset_evaluation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_mode` <a name="reset_evaluation_mode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```python
def reset_evaluation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterBinaryAuthorization">ContainerAttachedClusterBinaryAuthorization</a>

---


### ContainerAttachedClusterErrorsList <a name="ContainerAttachedClusterErrorsList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAttachedClusterErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerAttachedClusterErrorsOutputReference <a name="ContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterErrors
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterErrors">ContainerAttachedClusterErrors</a>

---


### ContainerAttachedClusterFleetOutputReference <a name="ContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterFleet">ContainerAttachedClusterFleet</a>

---


### ContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">reset_enable_components</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_components` <a name="reset_enable_components" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```python
def reset_enable_components() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enable_components_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enable_components</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_components_input`<sup>Optional</sup> <a name="enable_components_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```python
enable_components_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_components`<sup>Required</sup> <a name="enable_components" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```python
enable_components: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### ContainerAttachedClusterLoggingConfigOutputReference <a name="ContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">put_component_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">reset_component_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component_config` <a name="put_component_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```python
def put_component_config(
  enable_components: typing.List[str] = None
) -> None
```

###### `enable_components`<sup>Optional</sup> <a name="enable_components" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.enableComponents"></a>

- *Type:* typing.List[str]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#enable_components ContainerAttachedCluster#enable_components}

---

##### `reset_component_config` <a name="reset_component_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```python
def reset_component_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">component_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">component_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_config`<sup>Required</sup> <a name="component_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```python
component_config: ContainerAttachedClusterLoggingConfigComponentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfigOutputReference">ContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `component_config_input`<sup>Optional</sup> <a name="component_config_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```python
component_config_input: ContainerAttachedClusterLoggingConfigComponentConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigComponentConfig">ContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterLoggingConfig">ContainerAttachedClusterLoggingConfig</a>

---


### ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### ContainerAttachedClusterMonitoringConfigOutputReference <a name="ContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">put_managed_prometheus_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">reset_managed_prometheus_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_prometheus_config` <a name="put_managed_prometheus_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```python
def put_managed_prometheus_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/container_attached_cluster#enabled ContainerAttachedCluster#enabled}

---

##### `reset_managed_prometheus_config` <a name="reset_managed_prometheus_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```python
def reset_managed_prometheus_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">managed_prometheus_config</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">managed_prometheus_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_prometheus_config`<sup>Required</sup> <a name="managed_prometheus_config" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```python
managed_prometheus_config: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `managed_prometheus_config_input`<sup>Optional</sup> <a name="managed_prometheus_config_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```python
managed_prometheus_config_input: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterMonitoringConfig">ContainerAttachedClusterMonitoringConfig</a>

---


### ContainerAttachedClusterOidcConfigOutputReference <a name="ContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks">reset_jwks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_jwks` <a name="reset_jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```python
def reset_jwks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">jwks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks">jwks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `jwks_input`<sup>Optional</sup> <a name="jwks_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```python
jwks_input: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```python
jwks: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterOidcConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterOidcConfig">ContainerAttachedClusterOidcConfig</a>

---


### ContainerAttachedClusterTimeoutsOutputReference <a name="ContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAttachedClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterTimeouts">ContainerAttachedClusterTimeouts</a>]

---


### ContainerAttachedClusterWorkloadIdentityConfigList <a name="ContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAttachedClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="ContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_attached_cluster

containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workload_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `workload_pool`<sup>Required</sup> <a name="workload_pool" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```python
workload_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAttachedClusterWorkloadIdentityConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAttachedCluster.ContainerAttachedClusterWorkloadIdentityConfig">ContainerAttachedClusterWorkloadIdentityConfig</a>

---



