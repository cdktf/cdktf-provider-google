# `artifactRegistryRepository` Submodule <a name="`artifactRegistryRepository` Submodule" id="@cdktf/provider-google.artifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepository <a name="ArtifactRegistryRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepository;

ArtifactRegistryRepository.Builder.create(Construct scope, java.lang.String id)
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
    .format(java.lang.String)
    .repositoryId(java.lang.String)
//  .cleanupPolicies(IResolvable)
//  .cleanupPolicies(java.util.List<ArtifactRegistryRepositoryCleanupPolicies>)
//  .cleanupPolicyDryRun(java.lang.Boolean)
//  .cleanupPolicyDryRun(IResolvable)
//  .description(java.lang.String)
//  .dockerConfig(ArtifactRegistryRepositoryDockerConfig)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .mavenConfig(ArtifactRegistryRepositoryMavenConfig)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .remoteRepositoryConfig(ArtifactRegistryRepositoryRemoteRepositoryConfig)
//  .timeouts(ArtifactRegistryRepositoryTimeouts)
//  .virtualRepositoryConfig(ArtifactRegistryRepositoryVirtualRepositoryConfig)
//  .vulnerabilityScanningConfig(ArtifactRegistryRepositoryVulnerabilityScanningConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.cleanupPolicies">cleanupPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>></code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the repository's location. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.vulnerabilityScanningConfig">vulnerabilityScanningConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | vulnerability_scanning_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#format ArtifactRegistryRepository#format}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}

---

##### `cleanupPolicies`<sup>Optional</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.cleanupPolicies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>>

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#cleanup_policies ArtifactRegistryRepository#cleanup_policies}

---

##### `cleanupPolicyDryRun`<sup>Optional</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.cleanupPolicyDryRun"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#cleanup_policy_dry_run ArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `dockerConfig`<sup>Optional</sup> <a name="dockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.dockerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#docker_config ArtifactRegistryRepository#docker_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#labels ArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#location ArtifactRegistryRepository#location}

---

##### `mavenConfig`<sup>Optional</sup> <a name="mavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.mavenConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#mode ArtifactRegistryRepository#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}.

---

##### `remoteRepositoryConfig`<sup>Optional</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.remoteRepositoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#remote_repository_config ArtifactRegistryRepository#remote_repository_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}

---

##### `virtualRepositoryConfig`<sup>Optional</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.virtualRepositoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#virtual_repository_config ArtifactRegistryRepository#virtual_repository_config}

---

##### `vulnerabilityScanningConfig`<sup>Optional</sup> <a name="vulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.vulnerabilityScanningConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

vulnerability_scanning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#vulnerability_scanning_config ArtifactRegistryRepository#vulnerability_scanning_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies">putCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig">putDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig">putMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig">putRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig">putVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVulnerabilityScanningConfig">putVulnerabilityScanningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicies">resetCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicyDryRun">resetCleanupPolicyDryRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDockerConfig">resetDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMavenConfig">resetMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetRemoteRepositoryConfig">resetRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVirtualRepositoryConfig">resetVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVulnerabilityScanningConfig">resetVulnerabilityScanningConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCleanupPolicies` <a name="putCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies"></a>

```java
public void putCleanupPolicies(IResolvable OR java.util.List<ArtifactRegistryRepositoryCleanupPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>>

---

##### `putDockerConfig` <a name="putDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig"></a>

```java
public void putDockerConfig(ArtifactRegistryRepositoryDockerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `putMavenConfig` <a name="putMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig"></a>

```java
public void putMavenConfig(ArtifactRegistryRepositoryMavenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `putRemoteRepositoryConfig` <a name="putRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig"></a>

```java
public void putRemoteRepositoryConfig(ArtifactRegistryRepositoryRemoteRepositoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts"></a>

```java
public void putTimeouts(ArtifactRegistryRepositoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---

##### `putVirtualRepositoryConfig` <a name="putVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig"></a>

```java
public void putVirtualRepositoryConfig(ArtifactRegistryRepositoryVirtualRepositoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `putVulnerabilityScanningConfig` <a name="putVulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVulnerabilityScanningConfig"></a>

```java
public void putVulnerabilityScanningConfig(ArtifactRegistryRepositoryVulnerabilityScanningConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVulnerabilityScanningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---

##### `resetCleanupPolicies` <a name="resetCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicies"></a>

```java
public void resetCleanupPolicies()
```

##### `resetCleanupPolicyDryRun` <a name="resetCleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicyDryRun"></a>

```java
public void resetCleanupPolicyDryRun()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDockerConfig` <a name="resetDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDockerConfig"></a>

```java
public void resetDockerConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMavenConfig` <a name="resetMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMavenConfig"></a>

```java
public void resetMavenConfig()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMode"></a>

```java
public void resetMode()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemoteRepositoryConfig` <a name="resetRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetRemoteRepositoryConfig"></a>

```java
public void resetRemoteRepositoryConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualRepositoryConfig` <a name="resetVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVirtualRepositoryConfig"></a>

```java
public void resetVirtualRepositoryConfig()
```

##### `resetVulnerabilityScanningConfig` <a name="resetVulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVulnerabilityScanningConfig"></a>

```java
public void resetVulnerabilityScanningConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepository;

ArtifactRegistryRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepository;

ArtifactRegistryRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepository;

ArtifactRegistryRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepository;

ArtifactRegistryRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ArtifactRegistryRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ArtifactRegistryRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies">cleanupPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.vulnerabilityScanningConfig">vulnerabilityScanningConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput">cleanupPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput">cleanupPolicyDryRunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput">dockerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput">mavenConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput">remoteRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput">virtualRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.vulnerabilityScanningConfigInput">vulnerabilityScanningConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cleanupPolicies`<sup>Required</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesList getCleanupPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dockerConfig`<sup>Required</sup> <a name="dockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig"></a>

```java
public ArtifactRegistryRepositoryDockerConfigOutputReference getDockerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mavenConfig`<sup>Required</sup> <a name="mavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig"></a>

```java
public ArtifactRegistryRepositoryMavenConfigOutputReference getMavenConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remoteRepositoryConfig`<sup>Required</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference getRemoteRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts"></a>

```java
public ArtifactRegistryRepositoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `virtualRepositoryConfig`<sup>Required</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference getVirtualRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a>

---

##### `vulnerabilityScanningConfig`<sup>Required</sup> <a name="vulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.vulnerabilityScanningConfig"></a>

```java
public ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference getVulnerabilityScanningConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a>

---

##### `cleanupPoliciesInput`<sup>Optional</sup> <a name="cleanupPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput"></a>

```java
public java.lang.Object getCleanupPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>>

---

##### `cleanupPolicyDryRunInput`<sup>Optional</sup> <a name="cleanupPolicyDryRunInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput"></a>

```java
public java.lang.Object getCleanupPolicyDryRunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dockerConfigInput`<sup>Optional</sup> <a name="dockerConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput"></a>

```java
public ArtifactRegistryRepositoryDockerConfig getDockerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mavenConfigInput`<sup>Optional</sup> <a name="mavenConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput"></a>

```java
public ArtifactRegistryRepositoryMavenConfig getMavenConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `remoteRepositoryConfigInput`<sup>Optional</sup> <a name="remoteRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfig getRemoteRepositoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---

##### `virtualRepositoryConfigInput`<sup>Optional</sup> <a name="virtualRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfig getVirtualRepositoryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `vulnerabilityScanningConfigInput`<sup>Optional</sup> <a name="vulnerabilityScanningConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.vulnerabilityScanningConfigInput"></a>

```java
public ArtifactRegistryRepositoryVulnerabilityScanningConfig getVulnerabilityScanningConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---

##### `cleanupPolicyDryRun`<sup>Required</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```java
public java.lang.Object getCleanupPolicyDryRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryCleanupPolicies <a name="ArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPolicies;

ArtifactRegistryRepositoryCleanupPolicies.builder()
    .id(java.lang.String)
//  .action(java.lang.String)
//  .condition(ArtifactRegistryRepositoryCleanupPoliciesCondition)
//  .mostRecentVersions(ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action">action</a></code> | <code>java.lang.String</code> | Policy action. Possible values: ["DELETE", "KEEP"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions">mostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | most_recent_versions block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Policy action. Possible values: ["DELETE", "KEEP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#action ArtifactRegistryRepository#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#condition ArtifactRegistryRepository#condition}

---

##### `mostRecentVersions`<sup>Optional</sup> <a name="mostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions getMostRecentVersions();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

most_recent_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#most_recent_versions ArtifactRegistryRepository#most_recent_versions}

---

### ArtifactRegistryRepositoryCleanupPoliciesCondition <a name="ArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesCondition;

ArtifactRegistryRepositoryCleanupPoliciesCondition.builder()
//  .newerThan(java.lang.String)
//  .olderThan(java.lang.String)
//  .packageNamePrefixes(java.util.List<java.lang.String>)
//  .tagPrefixes(java.util.List<java.lang.String>)
//  .tagState(java.lang.String)
//  .versionNamePrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan">newerThan</a></code> | <code>java.lang.String</code> | Match versions newer than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | Match versions older than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Match versions by package prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes">tagPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Match versions by tag prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState">tagState</a></code> | <code>java.lang.String</code> | Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes">versionNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Match versions by version name prefix. Applied on any prefix match. |

---

##### `newerThan`<sup>Optional</sup> <a name="newerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan"></a>

```java
public java.lang.String getNewerThan();
```

- *Type:* java.lang.String

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#newer_than ArtifactRegistryRepository#newer_than}

---

##### `olderThan`<sup>Optional</sup> <a name="olderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#older_than ArtifactRegistryRepository#older_than}

---

##### `packageNamePrefixes`<sup>Optional</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

##### `tagPrefixes`<sup>Optional</sup> <a name="tagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes"></a>

```java
public java.util.List<java.lang.String> getTagPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#tag_prefixes ArtifactRegistryRepository#tag_prefixes}

---

##### `tagState`<sup>Optional</sup> <a name="tagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState"></a>

```java
public java.lang.String getTagState();
```

- *Type:* java.lang.String

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#tag_state ArtifactRegistryRepository#tag_state}

---

##### `versionNamePrefixes`<sup>Optional</sup> <a name="versionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getVersionNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#version_name_prefixes ArtifactRegistryRepository#version_name_prefixes}

---

### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;

ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.builder()
//  .keepCount(java.lang.Number)
//  .packageNamePrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount">keepCount</a></code> | <code>java.lang.Number</code> | Minimum number of versions to keep. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Match versions by package prefix. Applied on any prefix match. |

---

##### `keepCount`<sup>Optional</sup> <a name="keepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount"></a>

```java
public java.lang.Number getKeepCount();
```

- *Type:* java.lang.Number

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#keep_count ArtifactRegistryRepository#keep_count}

---

##### `packageNamePrefixes`<sup>Optional</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

### ArtifactRegistryRepositoryConfig <a name="ArtifactRegistryRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryConfig;

ArtifactRegistryRepositoryConfig.builder()
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
    .format(java.lang.String)
    .repositoryId(java.lang.String)
//  .cleanupPolicies(IResolvable)
//  .cleanupPolicies(java.util.List<ArtifactRegistryRepositoryCleanupPolicies>)
//  .cleanupPolicyDryRun(java.lang.Boolean)
//  .cleanupPolicyDryRun(IResolvable)
//  .description(java.lang.String)
//  .dockerConfig(ArtifactRegistryRepositoryDockerConfig)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .mavenConfig(ArtifactRegistryRepositoryMavenConfig)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .remoteRepositoryConfig(ArtifactRegistryRepositoryRemoteRepositoryConfig)
//  .timeouts(ArtifactRegistryRepositoryTimeouts)
//  .virtualRepositoryConfig(ArtifactRegistryRepositoryVirtualRepositoryConfig)
//  .vulnerabilityScanningConfig(ArtifactRegistryRepositoryVulnerabilityScanningConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies">cleanupPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>></code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the repository's location. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig">vulnerabilityScanningConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | vulnerability_scanning_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#format ArtifactRegistryRepository#format}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}

---

##### `cleanupPolicies`<sup>Optional</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies"></a>

```java
public java.lang.Object getCleanupPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>>

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#cleanup_policies ArtifactRegistryRepository#cleanup_policies}

---

##### `cleanupPolicyDryRun`<sup>Optional</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun"></a>

```java
public java.lang.Object getCleanupPolicyDryRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#cleanup_policy_dry_run ArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `dockerConfig`<sup>Optional</sup> <a name="dockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig"></a>

```java
public ArtifactRegistryRepositoryDockerConfig getDockerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#docker_config ArtifactRegistryRepository#docker_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#labels ArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#location ArtifactRegistryRepository#location}

---

##### `mavenConfig`<sup>Optional</sup> <a name="mavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```java
public ArtifactRegistryRepositoryMavenConfig getMavenConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#mode ArtifactRegistryRepository#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}.

---

##### `remoteRepositoryConfig`<sup>Optional</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfig getRemoteRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#remote_repository_config ArtifactRegistryRepository#remote_repository_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts"></a>

```java
public ArtifactRegistryRepositoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}

---

##### `virtualRepositoryConfig`<sup>Optional</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfig getVirtualRepositoryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#virtual_repository_config ArtifactRegistryRepository#virtual_repository_config}

---

##### `vulnerabilityScanningConfig`<sup>Optional</sup> <a name="vulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig"></a>

```java
public ArtifactRegistryRepositoryVulnerabilityScanningConfig getVulnerabilityScanningConfig();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

vulnerability_scanning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#vulnerability_scanning_config ArtifactRegistryRepository#vulnerability_scanning_config}

---

### ArtifactRegistryRepositoryDockerConfig <a name="ArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryDockerConfig;

ArtifactRegistryRepositoryDockerConfig.builder()
//  .immutableTags(java.lang.Boolean)
//  .immutableTags(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags">immutableTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository which enabled this flag prevents all tags from being modified, moved or deleted. |

---

##### `immutableTags`<sup>Optional</sup> <a name="immutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags"></a>

```java
public java.lang.Object getImmutableTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#immutable_tags ArtifactRegistryRepository#immutable_tags}

---

### ArtifactRegistryRepositoryMavenConfig <a name="ArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryMavenConfig;

ArtifactRegistryRepositoryMavenConfig.builder()
//  .allowSnapshotOverwrites(java.lang.Boolean)
//  .allowSnapshotOverwrites(IResolvable)
//  .versionPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy">versionPolicy</a></code> | <code>java.lang.String</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `allowSnapshotOverwrites`<sup>Optional</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```java
public java.lang.Object getAllowSnapshotOverwrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#allow_snapshot_overwrites ArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `versionPolicy`<sup>Optional</sup> <a name="versionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```java
public java.lang.String getVersionPolicy();
```

- *Type:* java.lang.String

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#version_policy ArtifactRegistryRepository#version_policy}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfig <a name="ArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfig;

ArtifactRegistryRepositoryRemoteRepositoryConfig.builder()
//  .aptRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository)
//  .commonRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository)
//  .description(java.lang.String)
//  .disableUpstreamValidation(java.lang.Boolean)
//  .disableUpstreamValidation(IResolvable)
//  .dockerRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository)
//  .mavenRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository)
//  .npmRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository)
//  .pythonRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository)
//  .upstreamCredentials(ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials)
//  .yumRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository">aptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | apt_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository">commonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | common_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the remote source. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation">disableUpstreamValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the remote repository upstream and upstream credentials will not be validated. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository">dockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | docker_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository">mavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | maven_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository">npmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | npm_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository">pythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | python_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials">upstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | upstream_credentials block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository">yumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | yum_repository block. |

---

##### `aptRepository`<sup>Optional</sup> <a name="aptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository getAptRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#apt_repository ArtifactRegistryRepository#apt_repository}

---

##### `commonRepository`<sup>Optional</sup> <a name="commonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository getCommonRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

common_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#common_repository ArtifactRegistryRepository#common_repository}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `disableUpstreamValidation`<sup>Optional</sup> <a name="disableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation"></a>

```java
public java.lang.Object getDisableUpstreamValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#disable_upstream_validation ArtifactRegistryRepository#disable_upstream_validation}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository getDockerRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#docker_repository ArtifactRegistryRepository#docker_repository}

---

##### `mavenRepository`<sup>Optional</sup> <a name="mavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository getMavenRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#maven_repository ArtifactRegistryRepository#maven_repository}

---

##### `npmRepository`<sup>Optional</sup> <a name="npmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository getNpmRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#npm_repository ArtifactRegistryRepository#npm_repository}

---

##### `pythonRepository`<sup>Optional</sup> <a name="pythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository getPythonRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#python_repository ArtifactRegistryRepository#python_repository}

---

##### `upstreamCredentials`<sup>Optional</sup> <a name="upstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials getUpstreamCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#upstream_credentials ArtifactRegistryRepository#upstream_credentials}

---

##### `yumRepository`<sup>Optional</sup> <a name="yumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository getYumRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#yum_repository ArtifactRegistryRepository#yum_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.builder()
//  .publicRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.builder()
    .repositoryBase(java.lang.String)
    .repositoryPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | Specific repository from the base. |

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.builder()
    .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | One of: a. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

One of: a.

Artifact Registry Repository resource, e.g. 'projects/UPSTREAM_PROJECT_ID/locations/REGION/repositories/UPSTREAM_REPOSITORY'
b. URI to the registry, e.g. '"https://registry-1.docker.io"'
c. URI to Artifact Registry Repository, e.g. '"https://REGION-docker.pkg.dev/UPSTREAM_PROJECT_ID/UPSTREAM_REPOSITORY"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.builder()
//  .customRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository)
//  .publicRepository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | Specific uri to the registry, e.g. '"https://registry-1.docker.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.builder()
//  .customRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository)
//  .publicRepository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.builder()
//  .customRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository)
//  .publicRepository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | Specific uri to the registry, e.g. '"https://registry.npmjs.org"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.builder()
//  .customRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository)
//  .publicRepository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri">uri</a></code> | <code>java.lang.String</code> | Specific uri to the registry, e.g. '"https://pypi.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;

ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.builder()
//  .usernamePasswordCredentials(ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials">usernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | username_password_credentials block. |

---

##### `usernamePasswordCredentials`<sup>Optional</sup> <a name="usernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials getUsernamePasswordCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#username_password_credentials ArtifactRegistryRepository#username_password_credentials}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;

ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.builder()
//  .passwordSecretVersion(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>java.lang.String</code> | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username">username</a></code> | <code>java.lang.String</code> | The username to access the remote repository. |

---

##### `passwordSecretVersion`<sup>Optional</sup> <a name="passwordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion"></a>

```java
public java.lang.String getPasswordSecretVersion();
```

- *Type:* java.lang.String

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#password_secret_version ArtifactRegistryRepository#password_secret_version}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#username ArtifactRegistryRepository#username}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.builder()
//  .publicRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;

ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.builder()
    .repositoryBase(java.lang.String)
    .repositoryPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'. |

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryTimeouts <a name="ArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryTimeouts;

ArtifactRegistryRepositoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}.

---

### ArtifactRegistryRepositoryVirtualRepositoryConfig <a name="ArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVirtualRepositoryConfig;

ArtifactRegistryRepositoryVirtualRepositoryConfig.builder()
//  .upstreamPolicies(IResolvable)
//  .upstreamPolicies(java.util.List<ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies">upstreamPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>></code> | upstream_policies block. |

---

##### `upstreamPolicies`<sup>Optional</sup> <a name="upstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies"></a>

```java
public java.lang.Object getUpstreamPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>>

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#upstream_policies ArtifactRegistryRepository#upstream_policies}

---

### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies;

ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.builder()
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .repository(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id">id</a></code> | <code>java.lang.String</code> | The user-provided ID of the upstream policy. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority">priority</a></code> | <code>java.lang.Number</code> | Entries with a greater priority value take precedence in the pull order. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository">repository</a></code> | <code>java.lang.String</code> | A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The user-provided ID of the upstream policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Entries with a greater priority value take precedence in the pull order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#priority ArtifactRegistryRepository#priority}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#repository ArtifactRegistryRepository#repository}

---

### ArtifactRegistryRepositoryVulnerabilityScanningConfig <a name="ArtifactRegistryRepositoryVulnerabilityScanningConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVulnerabilityScanningConfig;

ArtifactRegistryRepositoryVulnerabilityScanningConfig.builder()
//  .enablementConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig">enablementConfig</a></code> | <code>java.lang.String</code> | This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"]. |

---

##### `enablementConfig`<sup>Optional</sup> <a name="enablementConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig"></a>

```java
public java.lang.String getEnablementConfig();
```

- *Type:* java.lang.String

This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/artifact_registry_repository#enablement_config ArtifactRegistryRepository#enablement_config}

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference;

new ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan">resetNewerThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan">resetOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes">resetPackageNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes">resetTagPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState">resetTagState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes">resetVersionNamePrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewerThan` <a name="resetNewerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan"></a>

```java
public void resetNewerThan()
```

##### `resetOlderThan` <a name="resetOlderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan"></a>

```java
public void resetOlderThan()
```

##### `resetPackageNamePrefixes` <a name="resetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes"></a>

```java
public void resetPackageNamePrefixes()
```

##### `resetTagPrefixes` <a name="resetTagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes"></a>

```java
public void resetTagPrefixes()
```

##### `resetTagState` <a name="resetTagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState"></a>

```java
public void resetTagState()
```

##### `resetVersionNamePrefixes` <a name="resetVersionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes"></a>

```java
public void resetVersionNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput">newerThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput">olderThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput">packageNamePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput">tagPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput">tagStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput">versionNamePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">newerThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">tagPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">tagState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">versionNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `newerThanInput`<sup>Optional</sup> <a name="newerThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput"></a>

```java
public java.lang.String getNewerThanInput();
```

- *Type:* java.lang.String

---

##### `olderThanInput`<sup>Optional</sup> <a name="olderThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput"></a>

```java
public java.lang.String getOlderThanInput();
```

- *Type:* java.lang.String

---

##### `packageNamePrefixesInput`<sup>Optional</sup> <a name="packageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagPrefixesInput`<sup>Optional</sup> <a name="tagPrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getTagPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagStateInput`<sup>Optional</sup> <a name="tagStateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput"></a>

```java
public java.lang.String getTagStateInput();
```

- *Type:* java.lang.String

---

##### `versionNamePrefixesInput`<sup>Optional</sup> <a name="versionNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getVersionNamePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newerThan`<sup>Required</sup> <a name="newerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```java
public java.lang.String getNewerThan();
```

- *Type:* java.lang.String

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagPrefixes`<sup>Required</sup> <a name="tagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```java
public java.util.List<java.lang.String> getTagPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagState`<sup>Required</sup> <a name="tagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```java
public java.lang.String getTagState();
```

- *Type:* java.lang.String

---

##### `versionNamePrefixes`<sup>Required</sup> <a name="versionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getVersionNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesList <a name="ArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesList;

new ArtifactRegistryRepositoryCleanupPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>>

---


### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference;

new ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount">resetKeepCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes">resetPackageNamePrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepCount` <a name="resetKeepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount"></a>

```java
public void resetKeepCount()
```

##### `resetPackageNamePrefixes` <a name="resetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes"></a>

```java
public void resetPackageNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput">keepCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput">packageNamePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">keepCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keepCountInput`<sup>Optional</sup> <a name="keepCountInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput"></a>

```java
public java.lang.Number getKeepCountInput();
```

- *Type:* java.lang.Number

---

##### `packageNamePrefixesInput`<sup>Optional</sup> <a name="packageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keepCount`<sup>Required</sup> <a name="keepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```java
public java.lang.Number getKeepCount();
```

- *Type:* java.lang.Number

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```java
public java.util.List<java.lang.String> getPackageNamePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference;

new ArtifactRegistryRepositoryCleanupPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions">putMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions">resetMostRecentVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition"></a>

```java
public void putCondition(ArtifactRegistryRepositoryCleanupPoliciesCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `putMostRecentVersions` <a name="putMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions"></a>

```java
public void putMostRecentVersions(ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetMostRecentVersions` <a name="resetMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions"></a>

```java
public void resetMostRecentVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">mostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput">mostRecentVersionsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a>

---

##### `mostRecentVersions`<sup>Required</sup> <a name="mostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference getMostRecentVersions();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mostRecentVersionsInput`<sup>Optional</sup> <a name="mostRecentVersionsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput"></a>

```java
public ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions getMostRecentVersionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>

---


### ArtifactRegistryRepositoryDockerConfigOutputReference <a name="ArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryDockerConfigOutputReference;

new ArtifactRegistryRepositoryDockerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags">resetImmutableTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmutableTags` <a name="resetImmutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags"></a>

```java
public void resetImmutableTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput">immutableTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">immutableTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `immutableTagsInput`<sup>Optional</sup> <a name="immutableTagsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput"></a>

```java
public java.lang.Object getImmutableTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `immutableTags`<sup>Required</sup> <a name="immutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```java
public java.lang.Object getImmutableTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryDockerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---


### ArtifactRegistryRepositoryMavenConfigOutputReference <a name="ArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryMavenConfigOutputReference;

new ArtifactRegistryRepositoryMavenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites">resetAllowSnapshotOverwrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy">resetVersionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSnapshotOverwrites` <a name="resetAllowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```java
public void resetAllowSnapshotOverwrites()
```

##### `resetVersionPolicy` <a name="resetVersionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```java
public void resetVersionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">allowSnapshotOverwritesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">versionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">versionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowSnapshotOverwritesInput`<sup>Optional</sup> <a name="allowSnapshotOverwritesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```java
public java.lang.Object getAllowSnapshotOverwritesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionPolicyInput`<sup>Optional</sup> <a name="versionPolicyInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```java
public java.lang.String getVersionPolicyInput();
```

- *Type:* java.lang.String

---

##### `allowSnapshotOverwrites`<sup>Required</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```java
public java.lang.Object getAllowSnapshotOverwrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `versionPolicy`<sup>Required</sup> <a name="versionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```java
public java.lang.String getVersionPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryMavenConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository">putPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicRepository` <a name="putPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository"></a>

```java
public void putPublicRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository getPublicRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repositoryBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repositoryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryBaseInput`<sup>Optional</sup> <a name="repositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```java
public java.lang.String getRepositoryBaseInput();
```

- *Type:* java.lang.String

---

##### `repositoryPathInput`<sup>Optional</sup> <a name="repositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```java
public java.lang.String getRepositoryPathInput();
```

- *Type:* java.lang.String

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository">putCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository">resetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository"></a>

```java
public void putCustomRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository"></a>

```java
public void resetCustomRepository()
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository getCustomRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public java.lang.String getPublicRepositoryInput();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository">putCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository">resetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository"></a>

```java
public void putCustomRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository"></a>

```java
public void resetCustomRepository()
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository getCustomRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public java.lang.String getPublicRepositoryInput();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository">putCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository">resetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository"></a>

```java
public void putCustomRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository"></a>

```java
public void resetCustomRepository()
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository getCustomRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public java.lang.String getPublicRepositoryInput();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository">putAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository">putCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository">putDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository">putMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository">putNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository">putPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials">putUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository">putYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository">resetAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository">resetCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation">resetDisableUpstreamValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository">resetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository">resetMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository">resetNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository">resetPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials">resetUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository">resetYumRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAptRepository` <a name="putAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository"></a>

```java
public void putAptRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `putCommonRepository` <a name="putCommonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository"></a>

```java
public void putCommonRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---

##### `putDockerRepository` <a name="putDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository"></a>

```java
public void putDockerRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `putMavenRepository` <a name="putMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository"></a>

```java
public void putMavenRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `putNpmRepository` <a name="putNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository"></a>

```java
public void putNpmRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `putPythonRepository` <a name="putPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository"></a>

```java
public void putPythonRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `putUpstreamCredentials` <a name="putUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials"></a>

```java
public void putUpstreamCredentials(ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `putYumRepository` <a name="putYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository"></a>

```java
public void putYumRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `resetAptRepository` <a name="resetAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository"></a>

```java
public void resetAptRepository()
```

##### `resetCommonRepository` <a name="resetCommonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository"></a>

```java
public void resetCommonRepository()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableUpstreamValidation` <a name="resetDisableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation"></a>

```java
public void resetDisableUpstreamValidation()
```

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository"></a>

```java
public void resetDockerRepository()
```

##### `resetMavenRepository` <a name="resetMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository"></a>

```java
public void resetMavenRepository()
```

##### `resetNpmRepository` <a name="resetNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository"></a>

```java
public void resetNpmRepository()
```

##### `resetPythonRepository` <a name="resetPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository"></a>

```java
public void resetPythonRepository()
```

##### `resetUpstreamCredentials` <a name="resetUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials"></a>

```java
public void resetUpstreamCredentials()
```

##### `resetYumRepository` <a name="resetYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository"></a>

```java
public void resetYumRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">aptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository">commonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">mavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">npmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">pythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">upstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">yumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput">aptRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput">commonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput">disableUpstreamValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput">mavenRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput">npmRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput">pythonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput">upstreamCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput">yumRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation">disableUpstreamValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aptRepository`<sup>Required</sup> <a name="aptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference getAptRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a>

---

##### `commonRepository`<sup>Required</sup> <a name="commonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference getCommonRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a>

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference getDockerRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a>

---

##### `mavenRepository`<sup>Required</sup> <a name="mavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference getMavenRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a>

---

##### `npmRepository`<sup>Required</sup> <a name="npmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference getNpmRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a>

---

##### `pythonRepository`<sup>Required</sup> <a name="pythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference getPythonRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a>

---

##### `upstreamCredentials`<sup>Required</sup> <a name="upstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference getUpstreamCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a>

---

##### `yumRepository`<sup>Required</sup> <a name="yumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference getYumRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a>

---

##### `aptRepositoryInput`<sup>Optional</sup> <a name="aptRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository getAptRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `commonRepositoryInput`<sup>Optional</sup> <a name="commonRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository getCommonRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableUpstreamValidationInput`<sup>Optional</sup> <a name="disableUpstreamValidationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput"></a>

```java
public java.lang.Object getDisableUpstreamValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository getDockerRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `mavenRepositoryInput`<sup>Optional</sup> <a name="mavenRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository getMavenRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `npmRepositoryInput`<sup>Optional</sup> <a name="npmRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository getNpmRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `pythonRepositoryInput`<sup>Optional</sup> <a name="pythonRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository getPythonRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `upstreamCredentialsInput`<sup>Optional</sup> <a name="upstreamCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials getUpstreamCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `yumRepositoryInput`<sup>Optional</sup> <a name="yumRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository getYumRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableUpstreamValidation`<sup>Required</sup> <a name="disableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation"></a>

```java
public java.lang.Object getDisableUpstreamValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository">putCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository">resetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository"></a>

```java
public void putCustomRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository"></a>

```java
public void resetCustomRepository()
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference getCustomRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository getCustomRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public java.lang.String getPublicRepositoryInput();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```java
public java.lang.String getPublicRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials">putUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials">resetUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsernamePasswordCredentials` <a name="putUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials"></a>

```java
public void putUsernamePasswordCredentials(ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `resetUsernamePasswordCredentials` <a name="resetUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials"></a>

```java
public void resetUsernamePasswordCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">usernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput">usernamePasswordCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernamePasswordCredentials`<sup>Required</sup> <a name="usernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference getUsernamePasswordCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a>

---

##### `usernamePasswordCredentialsInput`<sup>Optional</sup> <a name="usernamePasswordCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials getUsernamePasswordCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion">resetPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordSecretVersion` <a name="resetPasswordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion"></a>

```java
public void resetPasswordSecretVersion()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput">passwordSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSecretVersionInput`<sup>Optional</sup> <a name="passwordSecretVersionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput"></a>

```java
public java.lang.String getPasswordSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```java
public java.lang.String getPasswordSecretVersion();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository">putPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository">resetPublicRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicRepository` <a name="putPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository"></a>

```java
public void putPublicRepository(ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository"></a>

```java
public void resetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference getPublicRepository();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository getPublicRepositoryInput();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference;

new ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repositoryBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repositoryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryBaseInput`<sup>Optional</sup> <a name="repositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```java
public java.lang.String getRepositoryBaseInput();
```

- *Type:* java.lang.String

---

##### `repositoryPathInput`<sup>Optional</sup> <a name="repositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```java
public java.lang.String getRepositoryPathInput();
```

- *Type:* java.lang.String

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```java
public java.lang.String getRepositoryBase();
```

- *Type:* java.lang.String

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```java
public java.lang.String getRepositoryPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryTimeoutsOutputReference <a name="ArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryTimeoutsOutputReference;

new ArtifactRegistryRepositoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference;

new ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies">putUpstreamPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies">resetUpstreamPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUpstreamPolicies` <a name="putUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies"></a>

```java
public void putUpstreamPolicies(IResolvable OR java.util.List<ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>>

---

##### `resetUpstreamPolicies` <a name="resetUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies"></a>

```java
public void resetUpstreamPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">upstreamPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput">upstreamPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `upstreamPolicies`<sup>Required</sup> <a name="upstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList getUpstreamPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `upstreamPoliciesInput`<sup>Optional</sup> <a name="upstreamPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput"></a>

```java
public java.lang.Object getUpstreamPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList;

new ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```java
public ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference;

new ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository"></a>

```java
public void resetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>

---


### ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference <a name="ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.artifact_registry_repository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference;

new ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig">resetEnablementConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnablementConfig` <a name="resetEnablementConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig"></a>

```java
public void resetEnablementConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason">enablementStateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput">enablementConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig">enablementConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `enablementStateReason`<sup>Required</sup> <a name="enablementStateReason" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason"></a>

```java
public java.lang.String getEnablementStateReason();
```

- *Type:* java.lang.String

---

##### `enablementConfigInput`<sup>Optional</sup> <a name="enablementConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput"></a>

```java
public java.lang.String getEnablementConfigInput();
```

- *Type:* java.lang.String

---

##### `enablementConfig`<sup>Required</sup> <a name="enablementConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig"></a>

```java
public java.lang.String getEnablementConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue"></a>

```java
public ArtifactRegistryRepositoryVulnerabilityScanningConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVulnerabilityScanningConfig">ArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---



