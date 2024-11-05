# `artifactRegistryRepository` Submodule <a name="`artifactRegistryRepository` Submodule" id="@cdktf/provider-google.artifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepository <a name="ArtifactRegistryRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepository(scope: Construct, id: string, config: ArtifactRegistryRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig">ArtifactRegistryRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig">ArtifactRegistryRepositoryConfig</a>

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

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCleanupPolicies` <a name="putCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies"></a>

```typescript
public putCleanupPolicies(value: IResolvable | ArtifactRegistryRepositoryCleanupPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putCleanupPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]

---

##### `putDockerConfig` <a name="putDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig"></a>

```typescript
public putDockerConfig(value: ArtifactRegistryRepositoryDockerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putDockerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `putMavenConfig` <a name="putMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig"></a>

```typescript
public putMavenConfig(value: ArtifactRegistryRepositoryMavenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putMavenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `putRemoteRepositoryConfig` <a name="putRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig"></a>

```typescript
public putRemoteRepositoryConfig(value: ArtifactRegistryRepositoryRemoteRepositoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: ArtifactRegistryRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---

##### `putVirtualRepositoryConfig` <a name="putVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig"></a>

```typescript
public putVirtualRepositoryConfig(value: ArtifactRegistryRepositoryVirtualRepositoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.putVirtualRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `resetCleanupPolicies` <a name="resetCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicies"></a>

```typescript
public resetCleanupPolicies(): void
```

##### `resetCleanupPolicyDryRun` <a name="resetCleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetCleanupPolicyDryRun"></a>

```typescript
public resetCleanupPolicyDryRun(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDockerConfig` <a name="resetDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetDockerConfig"></a>

```typescript
public resetDockerConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMavenConfig` <a name="resetMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMavenConfig"></a>

```typescript
public resetMavenConfig(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteRepositoryConfig` <a name="resetRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetRemoteRepositoryConfig"></a>

```typescript
public resetRemoteRepositoryConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualRepositoryConfig` <a name="resetVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.resetVirtualRepositoryConfig"></a>

```typescript
public resetVirtualRepositoryConfig(): void
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

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

artifactRegistryRepository.ArtifactRegistryRepository.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies">cleanupPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput">cleanupPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput">cleanupPolicyDryRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput">dockerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput">mavenConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput">remoteRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput">virtualRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cleanupPolicies`<sup>Required</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicies"></a>

```typescript
public readonly cleanupPolicies: ArtifactRegistryRepositoryCleanupPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList">ArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dockerConfig`<sup>Required</sup> <a name="dockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfig"></a>

```typescript
public readonly dockerConfig: ArtifactRegistryRepositoryDockerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference">ArtifactRegistryRepositoryDockerConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `mavenConfig`<sup>Required</sup> <a name="mavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfig"></a>

```typescript
public readonly mavenConfig: ArtifactRegistryRepositoryMavenConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference">ArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteRepositoryConfig`<sup>Required</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```typescript
public readonly remoteRepositoryConfig: ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference">ArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `virtualRepositoryConfig`<sup>Required</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```typescript
public readonly virtualRepositoryConfig: ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a>

---

##### `cleanupPoliciesInput`<sup>Optional</sup> <a name="cleanupPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPoliciesInput"></a>

```typescript
public readonly cleanupPoliciesInput: IResolvable | ArtifactRegistryRepositoryCleanupPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]

---

##### `cleanupPolicyDryRunInput`<sup>Optional</sup> <a name="cleanupPolicyDryRunInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRunInput"></a>

```typescript
public readonly cleanupPolicyDryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dockerConfigInput`<sup>Optional</sup> <a name="dockerConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.dockerConfigInput"></a>

```typescript
public readonly dockerConfigInput: ArtifactRegistryRepositoryDockerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mavenConfigInput`<sup>Optional</sup> <a name="mavenConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mavenConfigInput"></a>

```typescript
public readonly mavenConfigInput: ArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteRepositoryConfigInput`<sup>Optional</sup> <a name="remoteRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.remoteRepositoryConfigInput"></a>

```typescript
public readonly remoteRepositoryConfigInput: ArtifactRegistryRepositoryRemoteRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArtifactRegistryRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---

##### `virtualRepositoryConfigInput`<sup>Optional</sup> <a name="virtualRepositoryConfigInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.virtualRepositoryConfigInput"></a>

```typescript
public readonly virtualRepositoryConfigInput: ArtifactRegistryRepositoryVirtualRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `cleanupPolicyDryRun`<sup>Required</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```typescript
public readonly cleanupPolicyDryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryCleanupPolicies <a name="ArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryCleanupPolicies: artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action">action</a></code> | <code>string</code> | Policy action. Possible values: ["DELETE", "KEEP"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions">mostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | most_recent_versions block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Policy action. Possible values: ["DELETE", "KEEP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#action ArtifactRegistryRepository#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRepositoryCleanupPoliciesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#condition ArtifactRegistryRepository#condition}

---

##### `mostRecentVersions`<sup>Optional</sup> <a name="mostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions"></a>

```typescript
public readonly mostRecentVersions: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

most_recent_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#most_recent_versions ArtifactRegistryRepository#most_recent_versions}

---

### ArtifactRegistryRepositoryCleanupPoliciesCondition <a name="ArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryCleanupPoliciesCondition: artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan">newerThan</a></code> | <code>string</code> | Match versions newer than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan">olderThan</a></code> | <code>string</code> | Match versions older than a duration. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>string[]</code> | Match versions by package prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes">tagPrefixes</a></code> | <code>string[]</code> | Match versions by tag prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState">tagState</a></code> | <code>string</code> | Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes">versionNamePrefixes</a></code> | <code>string[]</code> | Match versions by version name prefix. Applied on any prefix match. |

---

##### `newerThan`<sup>Optional</sup> <a name="newerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan"></a>

```typescript
public readonly newerThan: string;
```

- *Type:* string

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#newer_than ArtifactRegistryRepository#newer_than}

---

##### `olderThan`<sup>Optional</sup> <a name="olderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#older_than ArtifactRegistryRepository#older_than}

---

##### `packageNamePrefixes`<sup>Optional</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes"></a>

```typescript
public readonly packageNamePrefixes: string[];
```

- *Type:* string[]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

##### `tagPrefixes`<sup>Optional</sup> <a name="tagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes"></a>

```typescript
public readonly tagPrefixes: string[];
```

- *Type:* string[]

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#tag_prefixes ArtifactRegistryRepository#tag_prefixes}

---

##### `tagState`<sup>Optional</sup> <a name="tagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState"></a>

```typescript
public readonly tagState: string;
```

- *Type:* string

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#tag_state ArtifactRegistryRepository#tag_state}

---

##### `versionNamePrefixes`<sup>Optional</sup> <a name="versionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes"></a>

```typescript
public readonly versionNamePrefixes: string[];
```

- *Type:* string[]

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#version_name_prefixes ArtifactRegistryRepository#version_name_prefixes}

---

### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryCleanupPoliciesMostRecentVersions: artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount">keepCount</a></code> | <code>number</code> | Minimum number of versions to keep. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>string[]</code> | Match versions by package prefix. Applied on any prefix match. |

---

##### `keepCount`<sup>Optional</sup> <a name="keepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount"></a>

```typescript
public readonly keepCount: number;
```

- *Type:* number

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#keep_count ArtifactRegistryRepository#keep_count}

---

##### `packageNamePrefixes`<sup>Optional</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes"></a>

```typescript
public readonly packageNamePrefixes: string[];
```

- *Type:* string[]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}

---

### ArtifactRegistryRepositoryConfig <a name="ArtifactRegistryRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryConfig: artifactRegistryRepository.ArtifactRegistryRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format">format</a></code> | <code>string</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies">cleanupPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]</code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun">cleanupPolicyDryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description">description</a></code> | <code>string</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig">dockerConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location">location</a></code> | <code>string</code> | The name of the location this repository is located in. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig">mavenConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode">mode</a></code> | <code>string</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig">remoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig">virtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#format ArtifactRegistryRepository#format}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}

---

##### `cleanupPolicies`<sup>Optional</sup> <a name="cleanupPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicies"></a>

```typescript
public readonly cleanupPolicies: IResolvable | ArtifactRegistryRepositoryCleanupPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#cleanup_policies ArtifactRegistryRepository#cleanup_policies}

---

##### `cleanupPolicyDryRun`<sup>Optional</sup> <a name="cleanupPolicyDryRun" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun"></a>

```typescript
public readonly cleanupPolicyDryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#cleanup_policy_dry_run ArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `dockerConfig`<sup>Optional</sup> <a name="dockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.dockerConfig"></a>

```typescript
public readonly dockerConfig: ArtifactRegistryRepositoryDockerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#docker_config ArtifactRegistryRepository#docker_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#labels ArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this repository is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#location ArtifactRegistryRepository#location}

---

##### `mavenConfig`<sup>Optional</sup> <a name="mavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```typescript
public readonly mavenConfig: ArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#mode ArtifactRegistryRepository#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}.

---

##### `remoteRepositoryConfig`<sup>Optional</sup> <a name="remoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig"></a>

```typescript
public readonly remoteRepositoryConfig: ArtifactRegistryRepositoryRemoteRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#remote_repository_config ArtifactRegistryRepository#remote_repository_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryRepositoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}

---

##### `virtualRepositoryConfig`<sup>Optional</sup> <a name="virtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig"></a>

```typescript
public readonly virtualRepositoryConfig: ArtifactRegistryRepositoryVirtualRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#virtual_repository_config ArtifactRegistryRepository#virtual_repository_config}

---

### ArtifactRegistryRepositoryDockerConfig <a name="ArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryDockerConfig: artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags">immutableTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | The repository which enabled this flag prevents all tags from being modified, moved or deleted. |

---

##### `immutableTags`<sup>Optional</sup> <a name="immutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig.property.immutableTags"></a>

```typescript
public readonly immutableTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#immutable_tags ArtifactRegistryRepository#immutable_tags}

---

### ArtifactRegistryRepositoryMavenConfig <a name="ArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryMavenConfig: artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy">versionPolicy</a></code> | <code>string</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `allowSnapshotOverwrites`<sup>Optional</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```typescript
public readonly allowSnapshotOverwrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#allow_snapshot_overwrites ArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `versionPolicy`<sup>Optional</sup> <a name="versionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```typescript
public readonly versionPolicy: string;
```

- *Type:* string

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#version_policy ArtifactRegistryRepository#version_policy}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfig <a name="ArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfig: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository">aptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | apt_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description">description</a></code> | <code>string</code> | The description of the remote source. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation">disableUpstreamValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the remote repository upstream and upstream credentials will not be validated. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository">dockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | docker_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository">mavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | maven_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository">npmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | npm_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository">pythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | python_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials">upstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | upstream_credentials block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository">yumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | yum_repository block. |

---

##### `aptRepository`<sup>Optional</sup> <a name="aptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository"></a>

```typescript
public readonly aptRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#apt_repository ArtifactRegistryRepository#apt_repository}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}

---

##### `disableUpstreamValidation`<sup>Optional</sup> <a name="disableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation"></a>

```typescript
public readonly disableUpstreamValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#disable_upstream_validation ArtifactRegistryRepository#disable_upstream_validation}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#docker_repository ArtifactRegistryRepository#docker_repository}

---

##### `mavenRepository`<sup>Optional</sup> <a name="mavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository"></a>

```typescript
public readonly mavenRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#maven_repository ArtifactRegistryRepository#maven_repository}

---

##### `npmRepository`<sup>Optional</sup> <a name="npmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository"></a>

```typescript
public readonly npmRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#npm_repository ArtifactRegistryRepository#npm_repository}

---

##### `pythonRepository`<sup>Optional</sup> <a name="pythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository"></a>

```typescript
public readonly pythonRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#python_repository ArtifactRegistryRepository#python_repository}

---

##### `upstreamCredentials`<sup>Optional</sup> <a name="upstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials"></a>

```typescript
public readonly upstreamCredentials: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#upstream_credentials ArtifactRegistryRepository#upstream_credentials}

---

##### `yumRepository`<sup>Optional</sup> <a name="yumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository"></a>

```typescript
public readonly yumRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#yum_repository ArtifactRegistryRepository#yum_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigAptRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase">repositoryBase</a></code> | <code>string</code> | A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath">repositoryPath</a></code> | <code>string</code> | Specific repository from the base. |

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase"></a>

```typescript
public readonly repositoryBase: string;
```

- *Type:* string

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath"></a>

```typescript
public readonly repositoryPath: string;
```

- *Type:* string

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigDockerRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository">publicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri">uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://registry-1.docker.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigMavenRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository">publicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri">uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigNpmRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository">publicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri">uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://registry.npmjs.org"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigPythonRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository">publicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. |

---

##### `customRepository`<sup>Optional</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri">uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://pypi.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials">usernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | username_password_credentials block. |

---

##### `usernamePasswordCredentials`<sup>Optional</sup> <a name="usernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials"></a>

```typescript
public readonly usernamePasswordCredentials: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#username_password_credentials ArtifactRegistryRepository#username_password_credentials}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>string</code> | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username">username</a></code> | <code>string</code> | The username to access the remote repository. |

---

##### `passwordSecretVersion`<sup>Optional</sup> <a name="passwordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: string;
```

- *Type:* string

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#password_secret_version ArtifactRegistryRepository#password_secret_version}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#username ArtifactRegistryRepository#username}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigYumRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `publicRepository`<sup>Optional</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository"></a>

```typescript
public readonly publicRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}

---

### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository: artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase">repositoryBase</a></code> | <code>string</code> | A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath">repositoryPath</a></code> | <code>string</code> | Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'. |

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase"></a>

```typescript
public readonly repositoryBase: string;
```

- *Type:* string

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath"></a>

```typescript
public readonly repositoryPath: string;
```

- *Type:* string

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}

---

### ArtifactRegistryRepositoryTimeouts <a name="ArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryTimeouts: artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}.

---

### ArtifactRegistryRepositoryVirtualRepositoryConfig <a name="ArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryVirtualRepositoryConfig: artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies">upstreamPolicies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]</code> | upstream_policies block. |

---

##### `upstreamPolicies`<sup>Optional</sup> <a name="upstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies"></a>

```typescript
public readonly upstreamPolicies: IResolvable | ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#upstream_policies ArtifactRegistryRepository#upstream_policies}

---

### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

const artifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies: artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id">id</a></code> | <code>string</code> | The user-provided ID of the upstream policy. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority">priority</a></code> | <code>number</code> | Entries with a greater priority value take precedence in the pull order. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository">repository</a></code> | <code>string</code> | A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The user-provided ID of the upstream policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Entries with a greater priority value take precedence in the pull order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#priority ArtifactRegistryRepository#priority}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/artifact_registry_repository#repository ArtifactRegistryRepository#repository}

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNewerThan` <a name="resetNewerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan"></a>

```typescript
public resetNewerThan(): void
```

##### `resetOlderThan` <a name="resetOlderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan"></a>

```typescript
public resetOlderThan(): void
```

##### `resetPackageNamePrefixes` <a name="resetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes"></a>

```typescript
public resetPackageNamePrefixes(): void
```

##### `resetTagPrefixes` <a name="resetTagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes"></a>

```typescript
public resetTagPrefixes(): void
```

##### `resetTagState` <a name="resetTagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState"></a>

```typescript
public resetTagState(): void
```

##### `resetVersionNamePrefixes` <a name="resetVersionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes"></a>

```typescript
public resetVersionNamePrefixes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput">newerThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput">olderThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput">packageNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput">tagPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput">tagStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput">versionNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">newerThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">olderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">tagPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">tagState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">versionNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newerThanInput`<sup>Optional</sup> <a name="newerThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput"></a>

```typescript
public readonly newerThanInput: string;
```

- *Type:* string

---

##### `olderThanInput`<sup>Optional</sup> <a name="olderThanInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput"></a>

```typescript
public readonly olderThanInput: string;
```

- *Type:* string

---

##### `packageNamePrefixesInput`<sup>Optional</sup> <a name="packageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput"></a>

```typescript
public readonly packageNamePrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagPrefixesInput`<sup>Optional</sup> <a name="tagPrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput"></a>

```typescript
public readonly tagPrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagStateInput`<sup>Optional</sup> <a name="tagStateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput"></a>

```typescript
public readonly tagStateInput: string;
```

- *Type:* string

---

##### `versionNamePrefixesInput`<sup>Optional</sup> <a name="versionNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput"></a>

```typescript
public readonly versionNamePrefixesInput: string[];
```

- *Type:* string[]

---

##### `newerThan`<sup>Required</sup> <a name="newerThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```typescript
public readonly newerThan: string;
```

- *Type:* string

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```typescript
public readonly packageNamePrefixes: string[];
```

- *Type:* string[]

---

##### `tagPrefixes`<sup>Required</sup> <a name="tagPrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```typescript
public readonly tagPrefixes: string[];
```

- *Type:* string[]

---

##### `tagState`<sup>Required</sup> <a name="tagState" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```typescript
public readonly tagState: string;
```

- *Type:* string

---

##### `versionNamePrefixes`<sup>Required</sup> <a name="versionNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```typescript
public readonly versionNamePrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryCleanupPoliciesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesList <a name="ArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```typescript
public get(index: number): ArtifactRegistryRepositoryCleanupPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRepositoryCleanupPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>[]

---


### ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepCount` <a name="resetKeepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount"></a>

```typescript
public resetKeepCount(): void
```

##### `resetPackageNamePrefixes` <a name="resetPackageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes"></a>

```typescript
public resetPackageNamePrefixes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput">keepCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput">packageNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">keepCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">packageNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keepCountInput`<sup>Optional</sup> <a name="keepCountInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput"></a>

```typescript
public readonly keepCountInput: number;
```

- *Type:* number

---

##### `packageNamePrefixesInput`<sup>Optional</sup> <a name="packageNamePrefixesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput"></a>

```typescript
public readonly packageNamePrefixesInput: string[];
```

- *Type:* string[]

---

##### `keepCount`<sup>Required</sup> <a name="keepCount" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```typescript
public readonly keepCount: number;
```

- *Type:* number

---

##### `packageNamePrefixes`<sup>Required</sup> <a name="packageNamePrefixes" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```typescript
public readonly packageNamePrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### ArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="ArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition"></a>

```typescript
public putCondition(value: ArtifactRegistryRepositoryCleanupPoliciesCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `putMostRecentVersions` <a name="putMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions"></a>

```typescript
public putMostRecentVersions(value: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetMostRecentVersions` <a name="resetMostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions"></a>

```typescript
public resetMostRecentVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">mostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput">mostRecentVersionsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a>

---

##### `mostRecentVersions`<sup>Required</sup> <a name="mostRecentVersions" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```typescript
public readonly mostRecentVersions: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: ArtifactRegistryRepositoryCleanupPoliciesCondition;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesCondition">ArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentVersionsInput`<sup>Optional</sup> <a name="mostRecentVersionsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput"></a>

```typescript
public readonly mostRecentVersionsInput: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRepositoryCleanupPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryCleanupPolicies">ArtifactRegistryRepositoryCleanupPolicies</a>

---


### ArtifactRegistryRepositoryDockerConfigOutputReference <a name="ArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmutableTags` <a name="resetImmutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags"></a>

```typescript
public resetImmutableTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput">immutableTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">immutableTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immutableTagsInput`<sup>Optional</sup> <a name="immutableTagsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput"></a>

```typescript
public readonly immutableTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `immutableTags`<sup>Required</sup> <a name="immutableTags" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```typescript
public readonly immutableTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryDockerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryDockerConfig">ArtifactRegistryRepositoryDockerConfig</a>

---


### ArtifactRegistryRepositoryMavenConfigOutputReference <a name="ArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSnapshotOverwrites` <a name="resetAllowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```typescript
public resetAllowSnapshotOverwrites(): void
```

##### `resetVersionPolicy` <a name="resetVersionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```typescript
public resetVersionPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">allowSnapshotOverwritesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">versionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">allowSnapshotOverwrites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">versionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSnapshotOverwritesInput`<sup>Optional</sup> <a name="allowSnapshotOverwritesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```typescript
public readonly allowSnapshotOverwritesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionPolicyInput`<sup>Optional</sup> <a name="versionPolicyInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```typescript
public readonly versionPolicyInput: string;
```

- *Type:* string

---

##### `allowSnapshotOverwrites`<sup>Required</sup> <a name="allowSnapshotOverwrites" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```typescript
public readonly allowSnapshotOverwrites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionPolicy`<sup>Required</sup> <a name="versionPolicy" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```typescript
public readonly versionPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryMavenConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryMavenConfig">ArtifactRegistryRepositoryMavenConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicRepository` <a name="putPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository"></a>

```typescript
public putPublicRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repositoryBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryBaseInput`<sup>Optional</sup> <a name="repositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```typescript
public readonly repositoryBaseInput: string;
```

- *Type:* string

---

##### `repositoryPathInput`<sup>Optional</sup> <a name="repositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```typescript
public readonly repositoryPathInput: string;
```

- *Type:* string

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```typescript
public readonly repositoryBase: string;
```

- *Type:* string

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```typescript
public readonly repositoryPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository"></a>

```typescript
public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository"></a>

```typescript
public resetCustomRepository(): void
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput"></a>

```typescript
public readonly customRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository"></a>

```typescript
public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository"></a>

```typescript
public resetCustomRepository(): void
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput"></a>

```typescript
public readonly customRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository"></a>

```typescript
public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository"></a>

```typescript
public resetCustomRepository(): void
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput"></a>

```typescript
public readonly customRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository">putDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository">putMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository">putNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository">putPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials">putUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository">putYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository">resetAptRepository</a></code> | *No description.* |
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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAptRepository` <a name="putAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository"></a>

```typescript
public putAptRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `putDockerRepository` <a name="putDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository"></a>

```typescript
public putDockerRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `putMavenRepository` <a name="putMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository"></a>

```typescript
public putMavenRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `putNpmRepository` <a name="putNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository"></a>

```typescript
public putNpmRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `putPythonRepository` <a name="putPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository"></a>

```typescript
public putPythonRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `putUpstreamCredentials` <a name="putUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials"></a>

```typescript
public putUpstreamCredentials(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `putYumRepository` <a name="putYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository"></a>

```typescript
public putYumRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `resetAptRepository` <a name="resetAptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository"></a>

```typescript
public resetAptRepository(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableUpstreamValidation` <a name="resetDisableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation"></a>

```typescript
public resetDisableUpstreamValidation(): void
```

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository"></a>

```typescript
public resetDockerRepository(): void
```

##### `resetMavenRepository` <a name="resetMavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository"></a>

```typescript
public resetMavenRepository(): void
```

##### `resetNpmRepository` <a name="resetNpmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository"></a>

```typescript
public resetNpmRepository(): void
```

##### `resetPythonRepository` <a name="resetPythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository"></a>

```typescript
public resetPythonRepository(): void
```

##### `resetUpstreamCredentials` <a name="resetUpstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials"></a>

```typescript
public resetUpstreamCredentials(): void
```

##### `resetYumRepository` <a name="resetYumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository"></a>

```typescript
public resetYumRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">aptRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">mavenRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">npmRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">pythonRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">upstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">yumRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput">aptRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput">disableUpstreamValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput">mavenRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput">npmRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput">pythonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput">upstreamCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput">yumRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation">disableUpstreamValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aptRepository`<sup>Required</sup> <a name="aptRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```typescript
public readonly aptRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a>

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a>

---

##### `mavenRepository`<sup>Required</sup> <a name="mavenRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```typescript
public readonly mavenRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a>

---

##### `npmRepository`<sup>Required</sup> <a name="npmRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```typescript
public readonly npmRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a>

---

##### `pythonRepository`<sup>Required</sup> <a name="pythonRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```typescript
public readonly pythonRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a>

---

##### `upstreamCredentials`<sup>Required</sup> <a name="upstreamCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```typescript
public readonly upstreamCredentials: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a>

---

##### `yumRepository`<sup>Required</sup> <a name="yumRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```typescript
public readonly yumRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a>

---

##### `aptRepositoryInput`<sup>Optional</sup> <a name="aptRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput"></a>

```typescript
public readonly aptRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableUpstreamValidationInput`<sup>Optional</sup> <a name="disableUpstreamValidationInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput"></a>

```typescript
public readonly disableUpstreamValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput"></a>

```typescript
public readonly dockerRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `mavenRepositoryInput`<sup>Optional</sup> <a name="mavenRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput"></a>

```typescript
public readonly mavenRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `npmRepositoryInput`<sup>Optional</sup> <a name="npmRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput"></a>

```typescript
public readonly npmRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `pythonRepositoryInput`<sup>Optional</sup> <a name="pythonRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput"></a>

```typescript
public readonly pythonRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `upstreamCredentialsInput`<sup>Optional</sup> <a name="upstreamCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput"></a>

```typescript
public readonly upstreamCredentialsInput: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `yumRepositoryInput`<sup>Optional</sup> <a name="yumRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput"></a>

```typescript
public readonly yumRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableUpstreamValidation`<sup>Required</sup> <a name="disableUpstreamValidation" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation"></a>

```typescript
public readonly disableUpstreamValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfig">ArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRepository` <a name="putCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository"></a>

```typescript
public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `resetCustomRepository` <a name="resetCustomRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository"></a>

```typescript
public resetCustomRepository(): void
```

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository">customRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput">customRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRepository`<sup>Required</sup> <a name="customRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository"></a>

```typescript
public readonly customRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a>

---

##### `customRepositoryInput`<sup>Optional</sup> <a name="customRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput"></a>

```typescript
public readonly customRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsernamePasswordCredentials` <a name="putUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials"></a>

```typescript
public putUsernamePasswordCredentials(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `resetUsernamePasswordCredentials` <a name="resetUsernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials"></a>

```typescript
public resetUsernamePasswordCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">usernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput">usernamePasswordCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernamePasswordCredentials`<sup>Required</sup> <a name="usernamePasswordCredentials" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```typescript
public readonly usernamePasswordCredentials: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a>

---

##### `usernamePasswordCredentialsInput`<sup>Optional</sup> <a name="usernamePasswordCredentialsInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput"></a>

```typescript
public readonly usernamePasswordCredentialsInput: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordSecretVersion` <a name="resetPasswordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion"></a>

```typescript
public resetPasswordSecretVersion(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput">passwordSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordSecretVersionInput`<sup>Optional</sup> <a name="passwordSecretVersionInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput"></a>

```typescript
public readonly passwordSecretVersionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```typescript
public readonly passwordSecretVersion: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicRepository` <a name="putPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository"></a>

```typescript
public putPublicRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `resetPublicRepository` <a name="resetPublicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository"></a>

```typescript
public resetPublicRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">publicRepository</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput">publicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicRepository`<sup>Required</sup> <a name="publicRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```typescript
public readonly publicRepository: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a>

---

##### `publicRepositoryInput`<sup>Optional</sup> <a name="publicRepositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput"></a>

```typescript
public readonly publicRepositoryInput: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repositoryBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">repositoryBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">repositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryBaseInput`<sup>Optional</sup> <a name="repositoryBaseInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```typescript
public readonly repositoryBaseInput: string;
```

- *Type:* string

---

##### `repositoryPathInput`<sup>Optional</sup> <a name="repositoryPathInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```typescript
public readonly repositoryPathInput: string;
```

- *Type:* string

---

##### `repositoryBase`<sup>Required</sup> <a name="repositoryBase" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```typescript
public readonly repositoryBase: string;
```

- *Type:* string

---

##### `repositoryPath`<sup>Required</sup> <a name="repositoryPath" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```typescript
public readonly repositoryPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### ArtifactRegistryRepositoryTimeoutsOutputReference <a name="ArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRepositoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryTimeouts">ArtifactRegistryRepositoryTimeouts</a>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUpstreamPolicies` <a name="putUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies"></a>

```typescript
public putUpstreamPolicies(value: IResolvable | ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]

---

##### `resetUpstreamPolicies` <a name="resetUpstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies"></a>

```typescript
public resetUpstreamPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">upstreamPolicies</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput">upstreamPoliciesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upstreamPolicies`<sup>Required</sup> <a name="upstreamPolicies" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```typescript
public readonly upstreamPolicies: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `upstreamPoliciesInput`<sup>Optional</sup> <a name="upstreamPoliciesInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput"></a>

```typescript
public readonly upstreamPoliciesInput: IResolvable | ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRepositoryVirtualRepositoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfig">ArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```typescript
public get(index: number): ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>[]

---


### ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRepository } from '@cdktf/provider-google'

new artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.artifactRegistryRepository.ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>

---



