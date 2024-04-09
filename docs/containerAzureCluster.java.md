# `containerAzureCluster` Submodule <a name="`containerAzureCluster` Submodule" id="@cdktf/provider-google.containerAzureCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAzureCluster <a name="ContainerAzureCluster" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster google_container_azure_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureCluster;

ContainerAzureCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authorization(ContainerAzureClusterAuthorization)
    .azureRegion(java.lang.String)
    .controlPlane(ContainerAzureClusterControlPlane)
    .fleet(ContainerAzureClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(ContainerAzureClusterNetworking)
    .resourceGroupId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureServicesAuthentication(ContainerAzureClusterAzureServicesAuthentication)
//  .client(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContainerAzureClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.client">client</a></code> | <code>java.lang.String</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#authorization ContainerAzureCluster#authorization}

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureRegion"></a>

- *Type:* java.lang.String

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#fleet ContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#location ContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#name ContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#networking ContainerAzureCluster#networking}

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.resourceGroupId"></a>

- *Type:* java.lang.String

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#annotations ContainerAzureCluster#annotations}

---

##### `azureServicesAuthentication`<sup>Optional</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.azureServicesAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#azure_services_authentication ContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.client"></a>

- *Type:* java.lang.String

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#client ContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#description ContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication">putAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication">resetAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization"></a>

```java
public void putAuthorization(ContainerAzureClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---

##### `putAzureServicesAuthentication` <a name="putAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication"></a>

```java
public void putAzureServicesAuthentication(ContainerAzureClusterAzureServicesAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putAzureServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane"></a>

```java
public void putControlPlane(ContainerAzureClusterControlPlane value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet"></a>

```java
public void putFleet(ContainerAzureClusterFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking"></a>

```java
public void putNetworking(ContainerAzureClusterNetworking value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts"></a>

```java
public void putTimeouts(ContainerAzureClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAzureServicesAuthentication` <a name="resetAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetAzureServicesAuthentication"></a>

```java
public void resetAzureServicesAuthentication()
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetClient"></a>

```java
public void resetClient()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureCluster;

ContainerAzureCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureCluster;

ContainerAzureCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureCluster;

ContainerAzureCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureCluster;

ContainerAzureCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAzureCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerAzureCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAzureCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAzureCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAzureCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput">azureRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput">azureServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput">clientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client">client</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorization"></a>

```java
public ContainerAzureClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference">ContainerAzureClusterAuthorizationOutputReference</a>

---

##### `azureServicesAuthentication`<sup>Required</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthentication"></a>

```java
public ContainerAzureClusterAzureServicesAuthenticationOutputReference getAzureServicesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference">ContainerAzureClusterAzureServicesAuthenticationOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlane"></a>

```java
public ContainerAzureClusterControlPlaneOutputReference getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference">ContainerAzureClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleet"></a>

```java
public ContainerAzureClusterFleetOutputReference getFleet();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference">ContainerAzureClusterFleetOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networking"></a>

```java
public ContainerAzureClusterNetworkingOutputReference getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference">ContainerAzureClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeouts"></a>

```java
public ContainerAzureClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference">ContainerAzureClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.workloadIdentityConfig"></a>

```java
public ContainerAzureClusterWorkloadIdentityConfigList getWorkloadIdentityConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList">ContainerAzureClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.authorizationInput"></a>

```java
public ContainerAzureClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---

##### `azureRegionInput`<sup>Optional</sup> <a name="azureRegionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegionInput"></a>

```java
public java.lang.String getAzureRegionInput();
```

- *Type:* java.lang.String

---

##### `azureServicesAuthenticationInput`<sup>Optional</sup> <a name="azureServicesAuthenticationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureServicesAuthenticationInput"></a>

```java
public ContainerAzureClusterAzureServicesAuthentication getAzureServicesAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.clientInput"></a>

```java
public java.lang.String getClientInput();
```

- *Type:* java.lang.String

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.controlPlaneInput"></a>

```java
public ContainerAzureClusterControlPlane getControlPlaneInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.fleetInput"></a>

```java
public ContainerAzureClusterFleet getFleetInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.networkingInput"></a>

```java
public ContainerAzureClusterNetworking getNetworkingInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.azureRegion"></a>

```java
public java.lang.String getAzureRegion();
```

- *Type:* java.lang.String

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAzureClusterAuthorization <a name="ContainerAzureClusterAuthorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorization;

ContainerAzureClusterAuthorization.builder()
    .adminUsers(IResolvable)
    .adminUsers(java.util.List<ContainerAzureClusterAuthorizationAdminUsers>)
//  .adminGroups(IResolvable)
//  .adminGroups(java.util.List<ContainerAzureClusterAuthorizationAdminGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>></code> | admin_users block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>></code> | admin_groups block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminUsers"></a>

```java
public java.lang.Object getAdminUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#admin_users ContainerAzureCluster#admin_users}

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization.property.adminGroups"></a>

```java
public java.lang.Object getAdminGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>>

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#admin_groups ContainerAzureCluster#admin_groups}

---

### ContainerAzureClusterAuthorizationAdminGroups <a name="ContainerAzureClusterAuthorizationAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminGroups;

ContainerAzureClusterAuthorizationAdminGroups.builder()
    .group(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>java.lang.String</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#group ContainerAzureCluster#group}

---

### ContainerAzureClusterAuthorizationAdminUsers <a name="ContainerAzureClusterAuthorizationAdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminUsers;

ContainerAzureClusterAuthorizationAdminUsers.builder()
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>java.lang.String</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#username ContainerAzureCluster#username}

---

### ContainerAzureClusterAzureServicesAuthentication <a name="ContainerAzureClusterAzureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAzureServicesAuthentication;

ContainerAzureClusterAzureServicesAuthentication.builder()
    .applicationId(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The Azure Active Directory Application ID for Authentication configuration. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The Azure Active Directory Tenant ID for Authentication configuration. |

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#application_id ContainerAzureCluster#application_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#tenant_id ContainerAzureCluster#tenant_id}

---

### ContainerAzureClusterConfig <a name="ContainerAzureClusterConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterConfig;

ContainerAzureClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authorization(ContainerAzureClusterAuthorization)
    .azureRegion(java.lang.String)
    .controlPlane(ContainerAzureClusterControlPlane)
    .fleet(ContainerAzureClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .networking(ContainerAzureClusterNetworking)
    .resourceGroupId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .azureServicesAuthentication(ContainerAzureClusterAzureServicesAuthentication)
//  .client(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ContainerAzureClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion">azureRegion</a></code> | <code>java.lang.String</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication">azureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client">client</a></code> | <code>java.lang.String</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.authorization"></a>

```java
public ContainerAzureClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#authorization ContainerAzureCluster#authorization}

---

##### `azureRegion`<sup>Required</sup> <a name="azureRegion" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureRegion"></a>

```java
public java.lang.String getAzureRegion();
```

- *Type:* java.lang.String

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.controlPlane"></a>

```java
public ContainerAzureClusterControlPlane getControlPlane();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.fleet"></a>

```java
public ContainerAzureClusterFleet getFleet();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#fleet ContainerAzureCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#location ContainerAzureCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#name ContainerAzureCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.networking"></a>

```java
public ContainerAzureClusterNetworking getNetworking();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#networking ContainerAzureCluster#networking}

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#annotations ContainerAzureCluster#annotations}

---

##### `azureServicesAuthentication`<sup>Optional</sup> <a name="azureServicesAuthentication" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.azureServicesAuthentication"></a>

```java
public ContainerAzureClusterAzureServicesAuthentication getAzureServicesAuthentication();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#azure_services_authentication ContainerAzureCluster#azure_services_authentication}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.client"></a>

```java
public java.lang.String getClient();
```

- *Type:* java.lang.String

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#client ContainerAzureCluster#client}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#description ContainerAzureCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#id ContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterConfig.property.timeouts"></a>

```java
public ContainerAzureClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}

---

### ContainerAzureClusterControlPlane <a name="ContainerAzureClusterControlPlane" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlane;

ContainerAzureClusterControlPlane.builder()
    .sshConfig(ContainerAzureClusterControlPlaneSshConfig)
    .subnetId(java.lang.String)
    .version(java.lang.String)
//  .databaseEncryption(ContainerAzureClusterControlPlaneDatabaseEncryption)
//  .mainVolume(ContainerAzureClusterControlPlaneMainVolume)
//  .proxyConfig(ContainerAzureClusterControlPlaneProxyConfig)
//  .replicaPlacements(IResolvable)
//  .replicaPlacements(java.util.List<ContainerAzureClusterControlPlaneReplicaPlacements>)
//  .rootVolume(ContainerAzureClusterControlPlaneRootVolume)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vmSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version">version</a></code> | <code>java.lang.String</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements">replicaPlacements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | replica_placements block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. A set of tags to apply to all underlying control plane Azure resources. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.sshConfig"></a>

```java
public ContainerAzureClusterControlPlaneSshConfig getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#ssh_config ContainerAzureCluster#ssh_config}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#version ContainerAzureCluster#version}

---

##### `databaseEncryption`<sup>Optional</sup> <a name="databaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.databaseEncryption"></a>

```java
public ContainerAzureClusterControlPlaneDatabaseEncryption getDatabaseEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#database_encryption ContainerAzureCluster#database_encryption}

---

##### `mainVolume`<sup>Optional</sup> <a name="mainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.mainVolume"></a>

```java
public ContainerAzureClusterControlPlaneMainVolume getMainVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#main_volume ContainerAzureCluster#main_volume}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.proxyConfig"></a>

```java
public ContainerAzureClusterControlPlaneProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#proxy_config ContainerAzureCluster#proxy_config}

---

##### `replicaPlacements`<sup>Optional</sup> <a name="replicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.replicaPlacements"></a>

```java
public java.lang.Object getReplicaPlacements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>>

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#replica_placements ContainerAzureCluster#replica_placements}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.rootVolume"></a>

```java
public ContainerAzureClusterControlPlaneRootVolume getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#root_volume ContainerAzureCluster#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#tags ContainerAzureCluster#tags}

---

##### `vmSize`<sup>Optional</sup> <a name="vmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#vm_size ContainerAzureCluster#vm_size}

---

### ContainerAzureClusterControlPlaneDatabaseEncryption <a name="ContainerAzureClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneDatabaseEncryption;

ContainerAzureClusterControlPlaneDatabaseEncryption.builder()
    .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The ARM ID of the Azure Key Vault key to encrypt / decrypt data. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#key_id ContainerAzureCluster#key_id}

---

### ContainerAzureClusterControlPlaneMainVolume <a name="ContainerAzureClusterControlPlaneMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneMainVolume;

ContainerAzureClusterControlPlaneMainVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneProxyConfig <a name="ContainerAzureClusterControlPlaneProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneProxyConfig;

ContainerAzureClusterControlPlaneProxyConfig.builder()
    .resourceGroupId(java.lang.String)
    .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#secret_id ContainerAzureCluster#secret_id}

---

### ContainerAzureClusterControlPlaneReplicaPlacements <a name="ContainerAzureClusterControlPlaneReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneReplicaPlacements;

ContainerAzureClusterControlPlaneReplicaPlacements.builder()
    .azureAvailabilityZone(java.lang.String)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | For a given replica, the ARM ID of the subnet where the control plane VM is deployed. |

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#azure_availability_zone ContainerAzureCluster#azure_availability_zone}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

For a given replica, the ARM ID of the subnet where the control plane VM is deployed.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}

---

### ContainerAzureClusterControlPlaneRootVolume <a name="ContainerAzureClusterControlPlaneRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneRootVolume;

ContainerAzureClusterControlPlaneRootVolume.builder()
//  .sizeGib(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}

---

### ContainerAzureClusterControlPlaneSshConfig <a name="ContainerAzureClusterControlPlaneSshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneSshConfig;

ContainerAzureClusterControlPlaneSshConfig.builder()
    .authorizedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#authorized_key ContainerAzureCluster#authorized_key}

---

### ContainerAzureClusterFleet <a name="ContainerAzureClusterFleet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterFleet;

ContainerAzureClusterFleet.builder()
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project">project</a></code> | <code>java.lang.String</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#project ContainerAzureCluster#project}

---

### ContainerAzureClusterNetworking <a name="ContainerAzureClusterNetworking" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterNetworking;

ContainerAzureClusterNetworking.builder()
    .podAddressCidrBlocks(java.util.List<java.lang.String>)
    .serviceAddressCidrBlocks(java.util.List<java.lang.String>)
    .virtualNetworkId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#pod_address_cidr_blocks ContainerAzureCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#service_address_cidr_blocks ContainerAzureCluster#service_address_cidr_blocks}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#virtual_network_id ContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ContainerAzureClusterTimeouts <a name="ContainerAzureClusterTimeouts" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterTimeouts;

ContainerAzureClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#create ContainerAzureCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#delete ContainerAzureCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/container_azure_cluster#update ContainerAzureCluster#update}.

---

### ContainerAzureClusterWorkloadIdentityConfig <a name="ContainerAzureClusterWorkloadIdentityConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterWorkloadIdentityConfig;

ContainerAzureClusterWorkloadIdentityConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ContainerAzureClusterAuthorizationAdminGroupsList <a name="ContainerAzureClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminGroupsList;

new ContainerAzureClusterAuthorizationAdminGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get"></a>

```java
public ContainerAzureClusterAuthorizationAdminGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>>

---


### ContainerAzureClusterAuthorizationAdminGroupsOutputReference <a name="ContainerAzureClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference;

new ContainerAzureClusterAuthorizationAdminGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>

---


### ContainerAzureClusterAuthorizationAdminUsersList <a name="ContainerAzureClusterAuthorizationAdminUsersList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminUsersList;

new ContainerAzureClusterAuthorizationAdminUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get"></a>

```java
public ContainerAzureClusterAuthorizationAdminUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>>

---


### ContainerAzureClusterAuthorizationAdminUsersOutputReference <a name="ContainerAzureClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference;

new ContainerAzureClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>

---


### ContainerAzureClusterAuthorizationOutputReference <a name="ContainerAzureClusterAuthorizationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAuthorizationOutputReference;

new ContainerAzureClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups">putAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminGroups` <a name="putAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups"></a>

```java
public void putAdminGroups(IResolvable OR java.util.List<ContainerAzureClusterAuthorizationAdminGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>>

---

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers"></a>

```java
public void putAdminUsers(IResolvable OR java.util.List<ContainerAzureClusterAuthorizationAdminUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>>

---

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.resetAdminGroups"></a>

```java
public void resetAdminGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroups"></a>

```java
public ContainerAzureClusterAuthorizationAdminGroupsList getAdminGroups();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroupsList">ContainerAzureClusterAuthorizationAdminGroupsList</a>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public ContainerAzureClusterAuthorizationAdminUsersList getAdminUsers();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsersList">ContainerAzureClusterAuthorizationAdminUsersList</a>

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```java
public java.lang.Object getAdminGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminGroups">ContainerAzureClusterAuthorizationAdminGroups</a>>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public java.lang.Object getAdminUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationAdminUsers">ContainerAzureClusterAuthorizationAdminUsers</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAuthorization">ContainerAzureClusterAuthorization</a>

---


### ContainerAzureClusterAzureServicesAuthenticationOutputReference <a name="ContainerAzureClusterAzureServicesAuthenticationOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference;

new ContainerAzureClusterAzureServicesAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterAzureServicesAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterAzureServicesAuthentication">ContainerAzureClusterAzureServicesAuthentication</a>

---


### ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference <a name="ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference;

new ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlaneDatabaseEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---


### ContainerAzureClusterControlPlaneMainVolumeOutputReference <a name="ContainerAzureClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference;

new ContainerAzureClusterControlPlaneMainVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlaneMainVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---


### ContainerAzureClusterControlPlaneOutputReference <a name="ContainerAzureClusterControlPlaneOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneOutputReference;

new ContainerAzureClusterControlPlaneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption">putDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume">putMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements">putReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption">resetDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume">resetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements">resetReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize">resetVmSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseEncryption` <a name="putDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```java
public void putDatabaseEncryption(ContainerAzureClusterControlPlaneDatabaseEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `putMainVolume` <a name="putMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume"></a>

```java
public void putMainVolume(ContainerAzureClusterControlPlaneMainVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig"></a>

```java
public void putProxyConfig(ContainerAzureClusterControlPlaneProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `putReplicaPlacements` <a name="putReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements"></a>

```java
public void putReplicaPlacements(IResolvable OR java.util.List<ContainerAzureClusterControlPlaneReplicaPlacements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume"></a>

```java
public void putRootVolume(ContainerAzureClusterControlPlaneRootVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig"></a>

```java
public void putSshConfig(ContainerAzureClusterControlPlaneSshConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---

##### `resetDatabaseEncryption` <a name="resetDatabaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption"></a>

```java
public void resetDatabaseEncryption()
```

##### `resetMainVolume` <a name="resetMainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetMainVolume"></a>

```java
public void resetMainVolume()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetReplicaPlacements` <a name="resetReplicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements"></a>

```java
public void resetReplicaPlacements()
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetRootVolume"></a>

```java
public void resetRootVolume()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmSize` <a name="resetVmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.resetVmSize"></a>

```java
public void resetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements">replicaPlacements</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput">databaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput">mainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput">replicaPlacementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```java
public ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference getDatabaseEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `mainVolume`<sup>Required</sup> <a name="mainVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolume"></a>

```java
public ContainerAzureClusterControlPlaneMainVolumeOutputReference getMainVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolumeOutputReference">ContainerAzureClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfig"></a>

```java
public ContainerAzureClusterControlPlaneProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference">ContainerAzureClusterControlPlaneProxyConfigOutputReference</a>

---

##### `replicaPlacements`<sup>Required</sup> <a name="replicaPlacements" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements"></a>

```java
public ContainerAzureClusterControlPlaneReplicaPlacementsList getReplicaPlacements();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList">ContainerAzureClusterControlPlaneReplicaPlacementsList</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolume"></a>

```java
public ContainerAzureClusterControlPlaneRootVolumeOutputReference getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference">ContainerAzureClusterControlPlaneRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfig"></a>

```java
public ContainerAzureClusterControlPlaneSshConfigOutputReference getSshConfig();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference">ContainerAzureClusterControlPlaneSshConfigOutputReference</a>

---

##### `databaseEncryptionInput`<sup>Optional</sup> <a name="databaseEncryptionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```java
public ContainerAzureClusterControlPlaneDatabaseEncryption getDatabaseEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneDatabaseEncryption">ContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `mainVolumeInput`<sup>Optional</sup> <a name="mainVolumeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```java
public ContainerAzureClusterControlPlaneMainVolume getMainVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneMainVolume">ContainerAzureClusterControlPlaneMainVolume</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```java
public ContainerAzureClusterControlPlaneProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `replicaPlacementsInput`<sup>Optional</sup> <a name="replicaPlacementsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput"></a>

```java
public java.lang.Object getReplicaPlacementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```java
public ContainerAzureClusterControlPlaneRootVolume getRootVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```java
public ContainerAzureClusterControlPlaneSshConfig getSshConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlane getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlane">ContainerAzureClusterControlPlane</a>

---


### ContainerAzureClusterControlPlaneProxyConfigOutputReference <a name="ContainerAzureClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference;

new ContainerAzureClusterControlPlaneProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput">resourceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceGroupIdInput`<sup>Optional</sup> <a name="resourceGroupIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```java
public java.lang.String getResourceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlaneProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneProxyConfig">ContainerAzureClusterControlPlaneProxyConfig</a>

---


### ContainerAzureClusterControlPlaneReplicaPlacementsList <a name="ContainerAzureClusterControlPlaneReplicaPlacementsList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneReplicaPlacementsList;

new ContainerAzureClusterControlPlaneReplicaPlacementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get"></a>

```java
public ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>>

---


### ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference <a name="ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference;

new ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput">azureAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone">azureAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `azureAvailabilityZoneInput`<sup>Optional</sup> <a name="azureAvailabilityZoneInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput"></a>

```java
public java.lang.String getAzureAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `azureAvailabilityZone`<sup>Required</sup> <a name="azureAvailabilityZone" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone"></a>

```java
public java.lang.String getAzureAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneReplicaPlacements">ContainerAzureClusterControlPlaneReplicaPlacements</a>

---


### ContainerAzureClusterControlPlaneRootVolumeOutputReference <a name="ContainerAzureClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference;

new ContainerAzureClusterControlPlaneRootVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```java
public void resetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```java
public java.lang.Number getSizeGibInput();
```

- *Type:* java.lang.Number

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```java
public java.lang.Number getSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlaneRootVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneRootVolume">ContainerAzureClusterControlPlaneRootVolume</a>

---


### ContainerAzureClusterControlPlaneSshConfigOutputReference <a name="ContainerAzureClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterControlPlaneSshConfigOutputReference;

new ContainerAzureClusterControlPlaneSshConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput">authorizedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey">authorizedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedKeyInput`<sup>Optional</sup> <a name="authorizedKeyInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput"></a>

```java
public java.lang.String getAuthorizedKeyInput();
```

- *Type:* java.lang.String

---

##### `authorizedKey`<sup>Required</sup> <a name="authorizedKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey"></a>

```java
public java.lang.String getAuthorizedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterControlPlaneSshConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterControlPlaneSshConfig">ContainerAzureClusterControlPlaneSshConfig</a>

---


### ContainerAzureClusterFleetOutputReference <a name="ContainerAzureClusterFleetOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterFleetOutputReference;

new ContainerAzureClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleetOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterFleet">ContainerAzureClusterFleet</a>

---


### ContainerAzureClusterNetworkingOutputReference <a name="ContainerAzureClusterNetworkingOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterNetworkingOutputReference;

new ContainerAzureClusterNetworkingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getPodAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getServiceAddressCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworkingOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterNetworking getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterNetworking">ContainerAzureClusterNetworking</a>

---


### ContainerAzureClusterTimeoutsOutputReference <a name="ContainerAzureClusterTimeoutsOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterTimeoutsOutputReference;

new ContainerAzureClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterTimeouts">ContainerAzureClusterTimeouts</a>

---


### ContainerAzureClusterWorkloadIdentityConfigList <a name="ContainerAzureClusterWorkloadIdentityConfigList" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterWorkloadIdentityConfigList;

new ContainerAzureClusterWorkloadIdentityConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get"></a>

```java
public ContainerAzureClusterWorkloadIdentityConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ContainerAzureClusterWorkloadIdentityConfigOutputReference <a name="ContainerAzureClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.container_azure_cluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference;

new ContainerAzureClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```java
public java.lang.String getWorkloadPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```java
public ContainerAzureClusterWorkloadIdentityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.containerAzureCluster.ContainerAzureClusterWorkloadIdentityConfig">ContainerAzureClusterWorkloadIdentityConfig</a>

---



