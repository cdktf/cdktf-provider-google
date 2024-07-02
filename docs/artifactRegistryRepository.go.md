# `artifactRegistryRepository` Submodule <a name="`artifactRegistryRepository` Submodule" id="@cdktf/provider-google.artifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepository <a name="ArtifactRegistryRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepository(scope Construct, id *string, config ArtifactRegistryRepositoryConfig) ArtifactRegistryRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig">ArtifactRegistryRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig">ArtifactRegistryRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies">PutCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig">PutDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig">PutMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig">PutRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig">PutVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicies">ResetCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicyDryRun">ResetCleanupPolicyDryRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDockerConfig">ResetDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMavenConfig">ResetMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetRemoteRepositoryConfig">ResetRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVirtualRepositoryConfig">ResetVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCleanupPolicies` <a name="PutCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies"></a>

```go
func PutCleanupPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDockerConfig` <a name="PutDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig"></a>

```go
func PutDockerConfig(value ArtifactRegistryRepositoryDockerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `PutMavenConfig` <a name="PutMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig"></a>

```go
func PutMavenConfig(value ArtifactRegistryRepositoryMavenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `PutRemoteRepositoryConfig` <a name="PutRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig"></a>

```go
func PutRemoteRepositoryConfig(value ArtifactRegistryRepositoryRemoteRepositoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts"></a>

```go
func PutTimeouts(value ArtifactRegistryRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---

##### `PutVirtualRepositoryConfig` <a name="PutVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig"></a>

```go
func PutVirtualRepositoryConfig(value ArtifactRegistryRepositoryVirtualRepositoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `ResetCleanupPolicies` <a name="ResetCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicies"></a>

```go
func ResetCleanupPolicies()
```

##### `ResetCleanupPolicyDryRun` <a name="ResetCleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicyDryRun"></a>

```go
func ResetCleanupPolicyDryRun()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDockerConfig` <a name="ResetDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDockerConfig"></a>

```go
func ResetDockerConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMavenConfig` <a name="ResetMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMavenConfig"></a>

```go
func ResetMavenConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoteRepositoryConfig` <a name="ResetRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetRemoteRepositoryConfig"></a>

```go
func ResetRemoteRepositoryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualRepositoryConfig` <a name="ResetVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVirtualRepositoryConfig"></a>

```go
func ResetVirtualRepositoryConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.ArtifactRegistryRepository_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.ArtifactRegistryRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.ArtifactRegistryRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.ArtifactRegistryRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArtifactRegistryRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies">CleanupPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig">DockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig">MavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig">RemoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig">VirtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput">CleanupPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput">CleanupPolicyDryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput">DockerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput">MavenConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput">RemoteRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput">VirtualRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun">CleanupPolicyDryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CleanupPolicies`<sup>Required</sup> <a name="CleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies"></a>

```go
func CleanupPolicies() ArtifactRegistryRepositoryCleanupPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DockerConfig`<sup>Required</sup> <a name="DockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig"></a>

```go
func DockerConfig() ArtifactRegistryRepositoryDockerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MavenConfig`<sup>Required</sup> <a name="MavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig"></a>

```go
func MavenConfig() ArtifactRegistryRepositoryMavenConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemoteRepositoryConfig`<sup>Required</sup> <a name="RemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```go
func RemoteRepositoryConfig() ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts"></a>

```go
func Timeouts() ArtifactRegistryRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VirtualRepositoryConfig`<sup>Required</sup> <a name="VirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```go
func VirtualRepositoryConfig() ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a>

---

##### `CleanupPoliciesInput`<sup>Optional</sup> <a name="CleanupPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput"></a>

```go
func CleanupPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `CleanupPolicyDryRunInput`<sup>Optional</sup> <a name="CleanupPolicyDryRunInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput"></a>

```go
func CleanupPolicyDryRunInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DockerConfigInput`<sup>Optional</sup> <a name="DockerConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput"></a>

```go
func DockerConfigInput() ArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MavenConfigInput`<sup>Optional</sup> <a name="MavenConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput"></a>

```go
func MavenConfigInput() ArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoteRepositoryConfigInput`<sup>Optional</sup> <a name="RemoteRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput"></a>

```go
func RemoteRepositoryConfigInput() ArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualRepositoryConfigInput`<sup>Optional</sup> <a name="VirtualRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput"></a>

```go
func VirtualRepositoryConfigInput() ArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `CleanupPolicyDryRun`<sup>Required</sup> <a name="CleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```go
func CleanupPolicyDryRun() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryCleanupPolicies <a name="ArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryCleanupPolicies {
	Id: *string,
	Action: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition,
	MostRecentVersions: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action">Action</a></code> | <code>*string</code> | Policy action. Possible values: ["DELETE", "KEEP"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions">MostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | most_recent_versions block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action"></a>

```go
Action *string
```

- *Type:* *string

Policy action. Possible values: ["DELETE", "KEEP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#action ArtifactRegistryRepository#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition"></a>

```go
Condition ArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#condition ArtifactRegistryRepository#condition}

---

##### `MostRecentVersions`<sup>Optional</sup> <a name="MostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions"></a>

```go
MostRecentVersions ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

most_recent_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#most_recent_versions ArtifactRegistryRepository#most_recent_versions}

---

### ArtifactRegistryRepositoryCleanupPoliciesCondition <a name="ArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryCleanupPoliciesCondition {
	NewerThan: *string,
	OlderThan: *string,
	PackageNamePrefixes: *[]*string,
	TagPrefixes: *[]*string,
	TagState: *string,
	VersionNamePrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan">NewerThan</a></code> | <code>*string</code> | Match versions newer than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan">OlderThan</a></code> | <code>*string</code> | Match versions older than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>*[]*string</code> | Match versions by package prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes">TagPrefixes</a></code> | <code>*[]*string</code> | Match versions by tag prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState">TagState</a></code> | <code>*string</code> | Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes">VersionNamePrefixes</a></code> | <code>*[]*string</code> | Match versions by version name prefix. Applied on any prefix match. |

---

##### `NewerThan`<sup>Optional</sup> <a name="NewerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan"></a>

```go
NewerThan *string
```

- *Type:* *string

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#newer_than ArtifactRegistryRepository#newer_than}

---

##### `OlderThan`<sup>Optional</sup> <a name="OlderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan"></a>

```go
OlderThan *string
```

- *Type:* *string

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#older_than ArtifactRegistryRepository#older_than}

---

##### `PackageNamePrefixes`<sup>Optional</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes"></a>

```go
PackageNamePrefixes *[]*string
```

- *Type:* *[]*string

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

##### `TagPrefixes`<sup>Optional</sup> <a name="TagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes"></a>

```go
TagPrefixes *[]*string
```

- *Type:* *[]*string

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#tag_prefixes ArtifactRegistryRepository#tag_prefixes}

---

##### `TagState`<sup>Optional</sup> <a name="TagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState"></a>

```go
TagState *string
```

- *Type:* *string

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#tag_state ArtifactRegistryRepository#tag_state}

---

##### `VersionNamePrefixes`<sup>Optional</sup> <a name="VersionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes"></a>

```go
VersionNamePrefixes *[]*string
```

- *Type:* *[]*string

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#version_name_prefixes ArtifactRegistryRepository#version_name_prefixes}

---

### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions {
	KeepCount: *f64,
	PackageNamePrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount">KeepCount</a></code> | <code>*f64</code> | Minimum number of versions to keep. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>*[]*string</code> | Match versions by package prefix. Applied on any prefix match. |

---

##### `KeepCount`<sup>Optional</sup> <a name="KeepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount"></a>

```go
KeepCount *f64
```

- *Type:* *f64

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#keep_count ArtifactRegistryRepository#keep_count}

---

##### `PackageNamePrefixes`<sup>Optional</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes"></a>

```go
PackageNamePrefixes *[]*string
```

- *Type:* *[]*string

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

### ArtifactRegistryRepositoryConfig <a name="ArtifactRegistryRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Format: *string,
	RepositoryId: *string,
	CleanupPolicies: interface{},
	CleanupPolicyDryRun: interface{},
	Description: *string,
	DockerConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig,
	Id: *string,
	KmsKeyName: *string,
	Labels: *map[string]*string,
	Location: *string,
	MavenConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig,
	Mode: *string,
	Project: *string,
	RemoteRepositoryConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts,
	VirtualRepositoryConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format">Format</a></code> | <code>*string</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies">CleanupPolicies</a></code> | <code>interface{}</code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun">CleanupPolicyDryRun</a></code> | <code>interface{}</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description">Description</a></code> | <code>*string</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig">DockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this repository is located in. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig">MavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode">Mode</a></code> | <code>*string</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig">RemoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig">VirtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#format ArtifactRegistryRepository#format}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}

---

##### `CleanupPolicies`<sup>Optional</sup> <a name="CleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies"></a>

```go
CleanupPolicies interface{}
```

- *Type:* interface{}

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#cleanup_policies ArtifactRegistryRepository#cleanup_policies}

---

##### `CleanupPolicyDryRun`<sup>Optional</sup> <a name="CleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun"></a>

```go
CleanupPolicyDryRun interface{}
```

- *Type:* interface{}

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#cleanup_policy_dry_run ArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `DockerConfig`<sup>Optional</sup> <a name="DockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig"></a>

```go
DockerConfig ArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#docker_config ArtifactRegistryRepository#docker_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#labels ArtifactRegistryRepository#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this repository is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#location ArtifactRegistryRepository#location}

---

##### `MavenConfig`<sup>Optional</sup> <a name="MavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```go
MavenConfig ArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#mode ArtifactRegistryRepository#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}.

---

##### `RemoteRepositoryConfig`<sup>Optional</sup> <a name="RemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig"></a>

```go
RemoteRepositoryConfig ArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#remote_repository_config ArtifactRegistryRepository#remote_repository_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts"></a>

```go
Timeouts ArtifactRegistryRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}

---

##### `VirtualRepositoryConfig`<sup>Optional</sup> <a name="VirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig"></a>

```go
VirtualRepositoryConfig ArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#virtual_repository_config ArtifactRegistryRepository#virtual_repository_config}

---

### ArtifactRegistryRepositoryDockerConfig <a name="ArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryDockerConfig {
	ImmutableTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags">ImmutableTags</a></code> | <code>interface{}</code> | The repository which enabled this flag prevents all tags from being modified, moved or deleted. |

---

##### `ImmutableTags`<sup>Optional</sup> <a name="ImmutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags"></a>

```go
ImmutableTags interface{}
```

- *Type:* interface{}

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#immutable_tags ArtifactRegistryRepository#immutable_tags}

---

### ArtifactRegistryRepositoryMavenConfig <a name="ArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryMavenConfig {
	AllowSnapshotOverwrites: interface{},
	VersionPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">AllowSnapshotOverwrites</a></code> | <code>interface{}</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy">VersionPolicy</a></code> | <code>*string</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `AllowSnapshotOverwrites`<sup>Optional</sup> <a name="AllowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```go
AllowSnapshotOverwrites interface{}
```

- *Type:* interface{}

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#allow_snapshot_overwrites ArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `VersionPolicy`<sup>Optional</sup> <a name="VersionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```go
VersionPolicy *string
```

- *Type:* *string

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#version_policy ArtifactRegistryRepository#version_policy}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfig <a name="ArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfig {
	AptRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository,
	Description: *string,
	DisableUpstreamValidation: interface{},
	DockerRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository,
	MavenRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository,
	NpmRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository,
	PythonRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository,
	UpstreamCredentials: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials,
	YumRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository">AptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | apt_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description">Description</a></code> | <code>*string</code> | The description of the remote source. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation">DisableUpstreamValidation</a></code> | <code>interface{}</code> | If true, the remote repository upstream and upstream credentials will not be validated. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository">DockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | docker_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository">MavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | maven_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository">NpmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | npm_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository">PythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | python_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials">UpstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | upstream_credentials block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository">YumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | yum_repository block. |

---

##### `AptRepository`<sup>Optional</sup> <a name="AptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository"></a>

```go
AptRepository ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#apt_repository ArtifactRegistryRepository#apt_repository}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `DisableUpstreamValidation`<sup>Optional</sup> <a name="DisableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation"></a>

```go
DisableUpstreamValidation interface{}
```

- *Type:* interface{}

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#disable_upstream_validation ArtifactRegistryRepository#disable_upstream_validation}

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository"></a>

```go
DockerRepository ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#docker_repository ArtifactRegistryRepository#docker_repository}

---

##### `MavenRepository`<sup>Optional</sup> <a name="MavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository"></a>

```go
MavenRepository ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#maven_repository ArtifactRegistryRepository#maven_repository}

---

##### `NpmRepository`<sup>Optional</sup> <a name="NpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository"></a>

```go
NpmRepository ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#npm_repository ArtifactRegistryRepository#npm_repository}

---

##### `PythonRepository`<sup>Optional</sup> <a name="PythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository"></a>

```go
PythonRepository ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#python_repository ArtifactRegistryRepository#python_repository}

---

##### `UpstreamCredentials`<sup>Optional</sup> <a name="UpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials"></a>

```go
UpstreamCredentials ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#upstream_credentials ArtifactRegistryRepository#upstream_credentials}

---

##### `YumRepository`<sup>Optional</sup> <a name="YumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository"></a>

```go
YumRepository ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#yum_repository ArtifactRegistryRepository#yum_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
	PublicRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository"></a>

```go
PublicRepository ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
	RepositoryBase: *string,
	RepositoryPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase">RepositoryBase</a></code> | <code>*string</code> | A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath">RepositoryPath</a></code> | <code>*string</code> | Specific repository from the base. |

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase"></a>

```go
RepositoryBase *string
```

- *Type:* *string

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath"></a>

```go
RepositoryPath *string
```

- *Type:* *string

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
	CustomRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository,
	PublicRepository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository"></a>

```go
CustomRepository ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository"></a>

```go
PublicRepository *string
```

- *Type:* *string

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri">Uri</a></code> | <code>*string</code> | Specific uri to the registry, e.g. '"https://registry-1.docker.io"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
	CustomRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository,
	PublicRepository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository"></a>

```go
CustomRepository ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository"></a>

```go
PublicRepository *string
```

- *Type:* *string

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri">Uri</a></code> | <code>*string</code> | Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
	CustomRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository,
	PublicRepository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository"></a>

```go
CustomRepository ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository"></a>

```go
PublicRepository *string
```

- *Type:* *string

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri">Uri</a></code> | <code>*string</code> | Specific uri to the registry, e.g. '"https://registry.npmjs.org"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
	CustomRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository,
	PublicRepository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository"></a>

```go
CustomRepository ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository"></a>

```go
PublicRepository *string
```

- *Type:* *string

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository {
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri">Uri</a></code> | <code>*string</code> | Specific uri to the registry, e.g. '"https://pypi.io"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials {
	UsernamePasswordCredentials: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials">UsernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | username_password_credentials block. |

---

##### `UsernamePasswordCredentials`<sup>Optional</sup> <a name="UsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials"></a>

```go
UsernamePasswordCredentials ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#username_password_credentials ArtifactRegistryRepository#username_password_credentials}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
	PasswordSecretVersion: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>*string</code> | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username">Username</a></code> | <code>*string</code> | The username to access the remote repository. |

---

##### `PasswordSecretVersion`<sup>Optional</sup> <a name="PasswordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion"></a>

```go
PasswordSecretVersion *string
```

- *Type:* *string

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#password_secret_version ArtifactRegistryRepository#password_secret_version}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#username ArtifactRegistryRepository#username}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
	PublicRepository: github.com/cdktf/cdktf-provider-google-go/google/v13.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository"></a>

```go
PublicRepository ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
	RepositoryBase: *string,
	RepositoryPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase">RepositoryBase</a></code> | <code>*string</code> | A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath">RepositoryPath</a></code> | <code>*string</code> | Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'. |

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase"></a>

```go
RepositoryBase *string
```

- *Type:* *string

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath"></a>

```go
RepositoryPath *string
```

- *Type:* *string

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryTimeouts <a name="ArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}.

---

### ArtifactRegistryRepositoryVirtualRepositoryConfig <a name="ArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryVirtualRepositoryConfig {
	UpstreamPolicies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies">UpstreamPolicies</a></code> | <code>interface{}</code> | upstream_policies block. |

---

##### `UpstreamPolicies`<sup>Optional</sup> <a name="UpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies"></a>

```go
UpstreamPolicies interface{}
```

- *Type:* interface{}

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#upstream_policies ArtifactRegistryRepository#upstream_policies}

---

### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

&artifactregistryrepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
	Id: *string,
	Priority: *f64,
	Repository: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id">Id</a></code> | <code>*string</code> | The user-provided ID of the upstream policy. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority">Priority</a></code> | <code>*f64</code> | Entries with a greater priority value take precedence in the pull order. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository">Repository</a></code> | <code>*string</code> | A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id"></a>

```go
Id *string
```

- *Type:* *string

The user-provided ID of the upstream policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Entries with a greater priority value take precedence in the pull order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#priority ArtifactRegistryRepository#priority}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/artifact_registry_repository#repository ArtifactRegistryRepository#repository}

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan">ResetNewerThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan">ResetOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes">ResetPackageNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes">ResetTagPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState">ResetTagState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes">ResetVersionNamePrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewerThan` <a name="ResetNewerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan"></a>

```go
func ResetNewerThan()
```

##### `ResetOlderThan` <a name="ResetOlderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan"></a>

```go
func ResetOlderThan()
```

##### `ResetPackageNamePrefixes` <a name="ResetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes"></a>

```go
func ResetPackageNamePrefixes()
```

##### `ResetTagPrefixes` <a name="ResetTagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes"></a>

```go
func ResetTagPrefixes()
```

##### `ResetTagState` <a name="ResetTagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState"></a>

```go
func ResetTagState()
```

##### `ResetVersionNamePrefixes` <a name="ResetVersionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes"></a>

```go
func ResetVersionNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput">NewerThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput">OlderThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput">PackageNamePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput">TagPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput">TagStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput">VersionNamePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">NewerThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">OlderThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">TagPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">TagState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">VersionNamePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewerThanInput`<sup>Optional</sup> <a name="NewerThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput"></a>

```go
func NewerThanInput() *string
```

- *Type:* *string

---

##### `OlderThanInput`<sup>Optional</sup> <a name="OlderThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput"></a>

```go
func OlderThanInput() *string
```

- *Type:* *string

---

##### `PackageNamePrefixesInput`<sup>Optional</sup> <a name="PackageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput"></a>

```go
func PackageNamePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagPrefixesInput`<sup>Optional</sup> <a name="TagPrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput"></a>

```go
func TagPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagStateInput`<sup>Optional</sup> <a name="TagStateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput"></a>

```go
func TagStateInput() *string
```

- *Type:* *string

---

##### `VersionNamePrefixesInput`<sup>Optional</sup> <a name="VersionNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput"></a>

```go
func VersionNamePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewerThan`<sup>Required</sup> <a name="NewerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```go
func NewerThan() *string
```

- *Type:* *string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```go
func OlderThan() *string
```

- *Type:* *string

---

##### `PackageNamePrefixes`<sup>Required</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```go
func PackageNamePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `TagPrefixes`<sup>Required</sup> <a name="TagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```go
func TagPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `TagState`<sup>Required</sup> <a name="TagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```go
func TagState() *string
```

- *Type:* *string

---

##### `VersionNamePrefixes`<sup>Required</sup> <a name="VersionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```go
func VersionNamePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesList <a name="ArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryCleanupPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ArtifactRegistryRepositoryCleanupPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```go
func Get(index *f64) ArtifactRegistryRepositoryCleanupPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount">ResetKeepCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes">ResetPackageNamePrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepCount` <a name="ResetKeepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount"></a>

```go
func ResetKeepCount()
```

##### `ResetPackageNamePrefixes` <a name="ResetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes"></a>

```go
func ResetPackageNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput">KeepCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput">PackageNamePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">KeepCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeepCountInput`<sup>Optional</sup> <a name="KeepCountInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput"></a>

```go
func KeepCountInput() *f64
```

- *Type:* *f64

---

##### `PackageNamePrefixesInput`<sup>Optional</sup> <a name="PackageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput"></a>

```go
func PackageNamePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeepCount`<sup>Required</sup> <a name="KeepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```go
func KeepCount() *f64
```

- *Type:* *f64

---

##### `PackageNamePrefixes`<sup>Required</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```go
func PackageNamePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryCleanupPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ArtifactRegistryRepositoryCleanupPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions">PutMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions">ResetMostRecentVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition"></a>

```go
func PutCondition(value ArtifactRegistryRepositoryCleanupPoliciesCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `PutMostRecentVersions` <a name="PutMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions"></a>

```go
func PutMostRecentVersions(value ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetMostRecentVersions` <a name="ResetMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions"></a>

```go
func ResetMostRecentVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">MostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput">MostRecentVersionsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```go
func Condition() ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a>

---

##### `MostRecentVersions`<sup>Required</sup> <a name="MostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```go
func MostRecentVersions() ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() ArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MostRecentVersionsInput`<sup>Optional</sup> <a name="MostRecentVersionsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput"></a>

```go
func MostRecentVersionsInput() ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactRegistryRepositoryDockerConfigOutputReference <a name="ArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryDockerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryDockerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags">ResetImmutableTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmutableTags` <a name="ResetImmutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags"></a>

```go
func ResetImmutableTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput">ImmutableTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">ImmutableTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImmutableTagsInput`<sup>Optional</sup> <a name="ImmutableTagsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput"></a>

```go
func ImmutableTagsInput() interface{}
```

- *Type:* interface{}

---

##### `ImmutableTags`<sup>Required</sup> <a name="ImmutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```go
func ImmutableTags() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---


### ArtifactRegistryRepositoryMavenConfigOutputReference <a name="ArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryMavenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryMavenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites">ResetAllowSnapshotOverwrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy">ResetVersionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSnapshotOverwrites` <a name="ResetAllowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```go
func ResetAllowSnapshotOverwrites()
```

##### `ResetVersionPolicy` <a name="ResetVersionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```go
func ResetVersionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">AllowSnapshotOverwritesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">VersionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">AllowSnapshotOverwrites</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">VersionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowSnapshotOverwritesInput`<sup>Optional</sup> <a name="AllowSnapshotOverwritesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```go
func AllowSnapshotOverwritesInput() interface{}
```

- *Type:* interface{}

---

##### `VersionPolicyInput`<sup>Optional</sup> <a name="VersionPolicyInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```go
func VersionPolicyInput() *string
```

- *Type:* *string

---

##### `AllowSnapshotOverwrites`<sup>Required</sup> <a name="AllowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```go
func AllowSnapshotOverwrites() interface{}
```

- *Type:* interface{}

---

##### `VersionPolicy`<sup>Required</sup> <a name="VersionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```go
func VersionPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository">PutPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicRepository` <a name="PutPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository"></a>

```go
func PutPublicRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">RepositoryBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">RepositoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">RepositoryBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">RepositoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryBaseInput`<sup>Optional</sup> <a name="RepositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```go
func RepositoryBaseInput() *string
```

- *Type:* *string

---

##### `RepositoryPathInput`<sup>Optional</sup> <a name="RepositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```go
func RepositoryPathInput() *string
```

- *Type:* *string

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```go
func RepositoryBase() *string
```

- *Type:* *string

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```go
func RepositoryPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository"></a>

```go
func PutCustomRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository"></a>

```go
func ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository"></a>

```go
func CustomRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput"></a>

```go
func CustomRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository"></a>

```go
func PutCustomRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository"></a>

```go
func ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository"></a>

```go
func CustomRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput"></a>

```go
func CustomRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository"></a>

```go
func PutCustomRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository"></a>

```go
func ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository"></a>

```go
func CustomRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput"></a>

```go
func CustomRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository">PutAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository">PutDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository">PutMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository">PutNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository">PutPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials">PutUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository">PutYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository">ResetAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation">ResetDisableUpstreamValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository">ResetMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository">ResetNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository">ResetPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials">ResetUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository">ResetYumRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAptRepository` <a name="PutAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository"></a>

```go
func PutAptRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `PutDockerRepository` <a name="PutDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository"></a>

```go
func PutDockerRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `PutMavenRepository` <a name="PutMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository"></a>

```go
func PutMavenRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `PutNpmRepository` <a name="PutNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository"></a>

```go
func PutNpmRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `PutPythonRepository` <a name="PutPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository"></a>

```go
func PutPythonRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `PutUpstreamCredentials` <a name="PutUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials"></a>

```go
func PutUpstreamCredentials(value ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `PutYumRepository` <a name="PutYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository"></a>

```go
func PutYumRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `ResetAptRepository` <a name="ResetAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository"></a>

```go
func ResetAptRepository()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableUpstreamValidation` <a name="ResetDisableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation"></a>

```go
func ResetDisableUpstreamValidation()
```

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository"></a>

```go
func ResetDockerRepository()
```

##### `ResetMavenRepository` <a name="ResetMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository"></a>

```go
func ResetMavenRepository()
```

##### `ResetNpmRepository` <a name="ResetNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository"></a>

```go
func ResetNpmRepository()
```

##### `ResetPythonRepository` <a name="ResetPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository"></a>

```go
func ResetPythonRepository()
```

##### `ResetUpstreamCredentials` <a name="ResetUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials"></a>

```go
func ResetUpstreamCredentials()
```

##### `ResetYumRepository` <a name="ResetYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository"></a>

```go
func ResetYumRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">AptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">DockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">MavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">NpmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">PythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">UpstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">YumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput">AptRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput">DisableUpstreamValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput">MavenRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput">NpmRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput">PythonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput">UpstreamCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput">YumRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation">DisableUpstreamValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AptRepository`<sup>Required</sup> <a name="AptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```go
func AptRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a>

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```go
func DockerRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a>

---

##### `MavenRepository`<sup>Required</sup> <a name="MavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```go
func MavenRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a>

---

##### `NpmRepository`<sup>Required</sup> <a name="NpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```go
func NpmRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a>

---

##### `PythonRepository`<sup>Required</sup> <a name="PythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```go
func PythonRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a>

---

##### `UpstreamCredentials`<sup>Required</sup> <a name="UpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```go
func UpstreamCredentials() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a>

---

##### `YumRepository`<sup>Required</sup> <a name="YumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```go
func YumRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a>

---

##### `AptRepositoryInput`<sup>Optional</sup> <a name="AptRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput"></a>

```go
func AptRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableUpstreamValidationInput`<sup>Optional</sup> <a name="DisableUpstreamValidationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput"></a>

```go
func DisableUpstreamValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput"></a>

```go
func DockerRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `MavenRepositoryInput`<sup>Optional</sup> <a name="MavenRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput"></a>

```go
func MavenRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `NpmRepositoryInput`<sup>Optional</sup> <a name="NpmRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput"></a>

```go
func NpmRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `PythonRepositoryInput`<sup>Optional</sup> <a name="PythonRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput"></a>

```go
func PythonRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `UpstreamCredentialsInput`<sup>Optional</sup> <a name="UpstreamCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput"></a>

```go
func UpstreamCredentialsInput() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `YumRepositoryInput`<sup>Optional</sup> <a name="YumRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput"></a>

```go
func YumRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableUpstreamValidation`<sup>Required</sup> <a name="DisableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation"></a>

```go
func DisableUpstreamValidation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository"></a>

```go
func PutCustomRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository"></a>

```go
func ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository"></a>

```go
func CustomRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput"></a>

```go
func CustomRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials">PutUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials">ResetUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsernamePasswordCredentials` <a name="PutUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials"></a>

```go
func PutUsernamePasswordCredentials(value ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `ResetUsernamePasswordCredentials` <a name="ResetUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials"></a>

```go
func ResetUsernamePasswordCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">UsernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput">UsernamePasswordCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsernamePasswordCredentials`<sup>Required</sup> <a name="UsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```go
func UsernamePasswordCredentials() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a>

---

##### `UsernamePasswordCredentialsInput`<sup>Optional</sup> <a name="UsernamePasswordCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput"></a>

```go
func UsernamePasswordCredentialsInput() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion">ResetPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordSecretVersion` <a name="ResetPasswordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion"></a>

```go
func ResetPasswordSecretVersion()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput">PasswordSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordSecretVersionInput`<sup>Optional</sup> <a name="PasswordSecretVersionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput"></a>

```go
func PasswordSecretVersionInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `PasswordSecretVersion`<sup>Required</sup> <a name="PasswordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```go
func PasswordSecretVersion() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository">PutPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicRepository` <a name="PutPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository"></a>

```go
func PutPublicRepository(value ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository"></a>

```go
func ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```go
func PublicRepository() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput"></a>

```go
func PublicRepositoryInput() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">RepositoryBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">RepositoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">RepositoryBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">RepositoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryBaseInput`<sup>Optional</sup> <a name="RepositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```go
func RepositoryBaseInput() *string
```

- *Type:* *string

---

##### `RepositoryPathInput`<sup>Optional</sup> <a name="RepositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```go
func RepositoryPathInput() *string
```

- *Type:* *string

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```go
func RepositoryBase() *string
```

- *Type:* *string

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```go
func RepositoryPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryTimeoutsOutputReference <a name="ArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies">PutUpstreamPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies">ResetUpstreamPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpstreamPolicies` <a name="PutUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies"></a>

```go
func PutUpstreamPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUpstreamPolicies` <a name="ResetUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies"></a>

```go
func ResetUpstreamPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">UpstreamPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput">UpstreamPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpstreamPolicies`<sup>Required</sup> <a name="UpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```go
func UpstreamPolicies() ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `UpstreamPoliciesInput`<sup>Optional</sup> <a name="UpstreamPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput"></a>

```go
func UpstreamPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```go
func Get(index *f64) ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/artifactregistryrepository"

artifactregistryrepository.NewArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository"></a>

```go
func ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



