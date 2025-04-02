# `cloudbuildv2Connection` Submodule <a name="`cloudbuildv2Connection` Submodule" id="@cdktf/provider-google.cloudbuildv2Connection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2Connection <a name="Cloudbuildv2Connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection google_cloudbuildv2_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2Connection(scope: Construct, id: string, config: Cloudbuildv2ConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig">Cloudbuildv2ConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig">Cloudbuildv2ConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig">putBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig">putBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig">putGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig">putGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig">putGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketCloudConfig">resetBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketDataCenterConfig">resetBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig">resetGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig">resetGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig">resetGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBitbucketCloudConfig` <a name="putBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig"></a>

```typescript
public putBitbucketCloudConfig(value: Cloudbuildv2ConnectionBitbucketCloudConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketCloudConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `putBitbucketDataCenterConfig` <a name="putBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig"></a>

```typescript
public putBitbucketDataCenterConfig(value: Cloudbuildv2ConnectionBitbucketDataCenterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putBitbucketDataCenterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `putGithubConfig` <a name="putGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig"></a>

```typescript
public putGithubConfig(value: Cloudbuildv2ConnectionGithubConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `putGithubEnterpriseConfig` <a name="putGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig"></a>

```typescript
public putGithubEnterpriseConfig(value: Cloudbuildv2ConnectionGithubEnterpriseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGithubEnterpriseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `putGitlabConfig` <a name="putGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig"></a>

```typescript
public putGitlabConfig(value: Cloudbuildv2ConnectionGitlabConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putGitlabConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts"></a>

```typescript
public putTimeouts(value: Cloudbuildv2ConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBitbucketCloudConfig` <a name="resetBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketCloudConfig"></a>

```typescript
public resetBitbucketCloudConfig(): void
```

##### `resetBitbucketDataCenterConfig` <a name="resetBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetBitbucketDataCenterConfig"></a>

```typescript
public resetBitbucketDataCenterConfig(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetGithubConfig` <a name="resetGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubConfig"></a>

```typescript
public resetGithubConfig(): void
```

##### `resetGithubEnterpriseConfig` <a name="resetGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGithubEnterpriseConfig"></a>

```typescript
public resetGithubEnterpriseConfig(): void
```

##### `resetGitlabConfig` <a name="resetGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetGitlabConfig"></a>

```typescript
public resetGitlabConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Cloudbuildv2Connection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloudbuildv2Connection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloudbuildv2Connection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2Connection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfig">bitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfig">bitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState">installationState</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfigInput">bitbucketCloudConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfigInput">bitbucketDataCenterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput">githubConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput">githubEnterpriseConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput">gitlabConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bitbucketCloudConfig`<sup>Required</sup> <a name="bitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfig"></a>

```typescript
public readonly bitbucketCloudConfig: Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference</a>

---

##### `bitbucketDataCenterConfig`<sup>Required</sup> <a name="bitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfig"></a>

```typescript
public readonly bitbucketDataCenterConfig: Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `githubConfig`<sup>Required</sup> <a name="githubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfig"></a>

```typescript
public readonly githubConfig: Cloudbuildv2ConnectionGithubConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference">Cloudbuildv2ConnectionGithubConfigOutputReference</a>

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference</a>

---

##### `gitlabConfig`<sup>Required</sup> <a name="gitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: Cloudbuildv2ConnectionGitlabConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigOutputReference</a>

---

##### `installationState`<sup>Required</sup> <a name="installationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.installationState"></a>

```typescript
public readonly installationState: Cloudbuildv2ConnectionInstallationStateList;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList">Cloudbuildv2ConnectionInstallationStateList</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeouts"></a>

```typescript
public readonly timeouts: Cloudbuildv2ConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference">Cloudbuildv2ConnectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bitbucketCloudConfigInput`<sup>Optional</sup> <a name="bitbucketCloudConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketCloudConfigInput"></a>

```typescript
public readonly bitbucketCloudConfigInput: Cloudbuildv2ConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---

##### `bitbucketDataCenterConfigInput`<sup>Optional</sup> <a name="bitbucketDataCenterConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.bitbucketDataCenterConfigInput"></a>

```typescript
public readonly bitbucketDataCenterConfigInput: Cloudbuildv2ConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `githubConfigInput`<sup>Optional</sup> <a name="githubConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubConfigInput"></a>

```typescript
public readonly githubConfigInput: Cloudbuildv2ConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---

##### `githubEnterpriseConfigInput`<sup>Optional</sup> <a name="githubEnterpriseConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.githubEnterpriseConfigInput"></a>

```typescript
public readonly githubEnterpriseConfigInput: Cloudbuildv2ConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---

##### `gitlabConfigInput`<sup>Optional</sup> <a name="gitlabConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.gitlabConfigInput"></a>

```typescript
public readonly gitlabConfigInput: Cloudbuildv2ConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Cloudbuildv2ConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2Connection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2ConnectionBitbucketCloudConfig <a name="Cloudbuildv2ConnectionBitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketCloudConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.workspace">workspace</a></code> | <code>string</code> | The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#workspace Cloudbuildv2Connection#workspace}

---

### Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfig <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketDataCenterConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri">hostUri</a></code> | <code>string</code> | The URI of the Bitbucket Data Center host this connection is for. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa">sslCa</a></code> | <code>string</code> | SSL certificate to use for requests to the Bitbucket Data Center. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

The URI of the Bitbucket Data Center host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

SSL certificate to use for requests to the Bitbucket Data Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionConfig <a name="Cloudbuildv2ConnectionConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name">name</a></code> | <code>string</code> | Immutable. The resource name of the connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketCloudConfig">bitbucketCloudConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | bitbucket_cloud_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig">bitbucketDataCenterConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | bitbucket_data_center_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If disabled is set to true, functionality is disabled for this connection. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig">githubConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | github_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | github_enterprise_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig">gitlabConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | gitlab_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#location Cloudbuildv2Connection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The resource name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#name Cloudbuildv2Connection#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#annotations Cloudbuildv2Connection#annotations}

---

##### `bitbucketCloudConfig`<sup>Optional</sup> <a name="bitbucketCloudConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketCloudConfig"></a>

```typescript
public readonly bitbucketCloudConfig: Cloudbuildv2ConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

bitbucket_cloud_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#bitbucket_cloud_config Cloudbuildv2Connection#bitbucket_cloud_config}

---

##### `bitbucketDataCenterConfig`<sup>Optional</sup> <a name="bitbucketDataCenterConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.bitbucketDataCenterConfig"></a>

```typescript
public readonly bitbucketDataCenterConfig: Cloudbuildv2ConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

bitbucket_data_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#bitbucket_data_center_config Cloudbuildv2Connection#bitbucket_data_center_config}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If disabled is set to true, functionality is disabled for this connection.

Repository based API methods and webhooks processing for repositories in this connection will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#disabled Cloudbuildv2Connection#disabled}

---

##### `githubConfig`<sup>Optional</sup> <a name="githubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubConfig"></a>

```typescript
public readonly githubConfig: Cloudbuildv2ConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

github_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#github_config Cloudbuildv2Connection#github_config}

---

##### `githubEnterpriseConfig`<sup>Optional</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: Cloudbuildv2ConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

github_enterprise_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#github_enterprise_config Cloudbuildv2Connection#github_enterprise_config}

---

##### `gitlabConfig`<sup>Optional</sup> <a name="gitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.gitlabConfig"></a>

```typescript
public readonly gitlabConfig: Cloudbuildv2ConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

gitlab_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#gitlab_config Cloudbuildv2Connection#gitlab_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#id Cloudbuildv2Connection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#project Cloudbuildv2Connection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Cloudbuildv2ConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#timeouts Cloudbuildv2Connection#timeouts}

---

### Cloudbuildv2ConnectionGithubConfig <a name="Cloudbuildv2ConnectionGithubConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGithubConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId">appInstallationId</a></code> | <code>number</code> | GitHub App installation id. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | authorizer_credential block. |

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: number;
```

- *Type:* number

GitHub App installation id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `authorizerCredential`<sup>Optional</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

### Cloudbuildv2ConnectionGithubConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGithubConfigAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `oauthTokenSecretVersion`<sup>Optional</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#oauth_token_secret_version Cloudbuildv2Connection#oauth_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGithubEnterpriseConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri">hostUri</a></code> | <code>string</code> | Required. The URI of the GitHub Enterprise host this connection is for. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId">appId</a></code> | <code>number</code> | Id of the GitHub App created from the manifest. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId">appInstallationId</a></code> | <code>number</code> | ID of the installation of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug">appSlug</a></code> | <code>string</code> | The URL-friendly name of the GitHub App. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa">sslCa</a></code> | <code>string</code> | SSL certificate to use for requests to GitHub Enterprise. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'. |

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

Required. The URI of the GitHub Enterprise host this connection is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appId"></a>

```typescript
public readonly appId: number;
```

- *Type:* number

Id of the GitHub App created from the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#app_id Cloudbuildv2Connection#app_id}

---

##### `appInstallationId`<sup>Optional</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: number;
```

- *Type:* number

ID of the installation of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#app_installation_id Cloudbuildv2Connection#app_installation_id}

---

##### `appSlug`<sup>Optional</sup> <a name="appSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.appSlug"></a>

```typescript
public readonly appSlug: string;
```

- *Type:* string

The URL-friendly name of the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#app_slug Cloudbuildv2Connection#app_slug}

---

##### `privateKeySecretVersion`<sup>Optional</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#private_key_secret_version Cloudbuildv2Connection#private_key_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

SSL certificate to use for requests to GitHub Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

##### `webhookSecretSecretVersion`<sup>Optional</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionGitlabConfig <a name="Cloudbuildv2ConnectionGitlabConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGitlabConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | read_authorizer_credential block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri">hostUri</a></code> | <code>string</code> | The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa">sslCa</a></code> | <code>string</code> | SSL certificate to use for requests to GitLab Enterprise. |

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#authorizer_credential Cloudbuildv2Connection#authorizer_credential}

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

read_authorizer_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#read_authorizer_credential Cloudbuildv2Connection#read_authorizer_credential}

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#webhook_secret_secret_version Cloudbuildv2Connection#webhook_secret_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `hostUri`<sup>Optional</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#host_uri Cloudbuildv2Connection#host_uri}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service_directory_config Cloudbuildv2Connection#service_directory_config}

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

SSL certificate to use for requests to GitLab Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#ssl_ca Cloudbuildv2Connection#ssl_ca}

---

### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGitlabConfigAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential: cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'. |

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#user_token_secret_version Cloudbuildv2Connection#user_token_secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig: cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service">service</a></code> | <code>string</code> | Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#service Cloudbuildv2Connection#service}

---

### Cloudbuildv2ConnectionInstallationState <a name="Cloudbuildv2ConnectionInstallationState" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionInstallationState: cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState = { ... }
```


### Cloudbuildv2ConnectionTimeouts <a name="Cloudbuildv2ConnectionTimeouts" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

const cloudbuildv2ConnectionTimeouts: cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#create Cloudbuildv2Connection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#delete Cloudbuildv2Connection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/cloudbuildv2_connection#update Cloudbuildv2Connection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential</a>

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketCloudConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfig">Cloudbuildv2ConnectionBitbucketCloudConfig</a>

---


### Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa">resetSslCa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.resetSslCa"></a>

```typescript
public resetSslCa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput">sslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCaInput"></a>

```typescript
public readonly sslCaInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketDataCenterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfig</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential">Cloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig">Cloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion">resetOauthTokenSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauthTokenSecretVersion` <a name="resetOauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.resetOauthTokenSecretVersion"></a>

```typescript
public resetOauthTokenSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput">oauthTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion">oauthTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersionInput`<sup>Optional</sup> <a name="oauthTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersionInput"></a>

```typescript
public readonly oauthTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthTokenSecretVersion`<sup>Required</sup> <a name="oauthTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.oauthTokenSecretVersion"></a>

```typescript
public readonly oauthTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGithubConfigOutputReference <a name="Cloudbuildv2ConnectionGithubConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential">resetAuthorizerCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: Cloudbuildv2ConnectionGithubConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetAuthorizerCredential` <a name="resetAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.resetAuthorizerCredential"></a>

```typescript
public resetAuthorizerCredential(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference</a>

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: number;
```

- *Type:* number

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: Cloudbuildv2ConnectionGithubConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigAuthorizerCredential">Cloudbuildv2ConnectionGithubConfigAuthorizerCredential</a>

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGithubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubConfig">Cloudbuildv2ConnectionGithubConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId">resetAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug">resetAppSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion">resetPrivateKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion">resetWebhookSecretSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `resetAppId` <a name="resetAppId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppId"></a>

```typescript
public resetAppId(): void
```

##### `resetAppInstallationId` <a name="resetAppInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppInstallationId"></a>

```typescript
public resetAppInstallationId(): void
```

##### `resetAppSlug` <a name="resetAppSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetAppSlug"></a>

```typescript
public resetAppSlug(): void
```

##### `resetPrivateKeySecretVersion` <a name="resetPrivateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetPrivateKeySecretVersion"></a>

```typescript
public resetPrivateKeySecretVersion(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetSslCa"></a>

```typescript
public resetSslCa(): void
```

##### `resetWebhookSecretSecretVersion` <a name="resetWebhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.resetWebhookSecretSecretVersion"></a>

```typescript
public resetWebhookSecretSecretVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput">appIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput">appInstallationIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput">appSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput">privateKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput">sslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId">appId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId">appInstallationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug">appSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion">privateKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: number;
```

- *Type:* number

---

##### `appInstallationIdInput`<sup>Optional</sup> <a name="appInstallationIdInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationIdInput"></a>

```typescript
public readonly appInstallationIdInput: number;
```

- *Type:* number

---

##### `appSlugInput`<sup>Optional</sup> <a name="appSlugInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlugInput"></a>

```typescript
public readonly appSlugInput: string;
```

- *Type:* string

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `privateKeySecretVersionInput`<sup>Optional</sup> <a name="privateKeySecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersionInput"></a>

```typescript
public readonly privateKeySecretVersionInput: string;
```

- *Type:* string

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCaInput"></a>

```typescript
public readonly sslCaInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appId"></a>

```typescript
public readonly appId: number;
```

- *Type:* number

---

##### `appInstallationId`<sup>Required</sup> <a name="appInstallationId" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appInstallationId"></a>

```typescript
public readonly appInstallationId: number;
```

- *Type:* number

---

##### `appSlug`<sup>Required</sup> <a name="appSlug" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.appSlug"></a>

```typescript
public readonly appSlug: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `privateKeySecretVersion`<sup>Required</sup> <a name="privateKeySecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.privateKeySecretVersion"></a>

```typescript
public readonly privateKeySecretVersion: string;
```

- *Type:* string

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGithubEnterpriseConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfig">Cloudbuildv2ConnectionGithubEnterpriseConfig</a>

---


### Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential">putAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential">putReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri">resetHostUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa">resetSslCa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizerCredential` <a name="putAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential"></a>

```typescript
public putAuthorizerCredential(value: Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `putReadAuthorizerCredential` <a name="putReadAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential"></a>

```typescript
public putReadAuthorizerCredential(value: Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putReadAuthorizerCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig"></a>

```typescript
public putServiceDirectoryConfig(value: Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `resetHostUri` <a name="resetHostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetHostUri"></a>

```typescript
public resetHostUri(): void
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetServiceDirectoryConfig"></a>

```typescript
public resetServiceDirectoryConfig(): void
```

##### `resetSslCa` <a name="resetSslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.resetSslCa"></a>

```typescript
public resetSslCa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential">authorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential">readAuthorizerCredential</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion">serverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput">authorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput">hostUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput">readAuthorizerCredentialInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput">sslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput">webhookSecretSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri">hostUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion">webhookSecretSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizerCredential`<sup>Required</sup> <a name="authorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredential"></a>

```typescript
public readonly authorizerCredential: Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference</a>

---

##### `readAuthorizerCredential`<sup>Required</sup> <a name="readAuthorizerCredential" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredential"></a>

```typescript
public readonly readAuthorizerCredential: Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference</a>

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serverVersion"></a>

```typescript
public readonly serverVersion: string;
```

- *Type:* string

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfig"></a>

```typescript
public readonly serviceDirectoryConfig: Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference</a>

---

##### `authorizerCredentialInput`<sup>Optional</sup> <a name="authorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.authorizerCredentialInput"></a>

```typescript
public readonly authorizerCredentialInput: Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigAuthorizerCredential</a>

---

##### `hostUriInput`<sup>Optional</sup> <a name="hostUriInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUriInput"></a>

```typescript
public readonly hostUriInput: string;
```

- *Type:* string

---

##### `readAuthorizerCredentialInput`<sup>Optional</sup> <a name="readAuthorizerCredentialInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.readAuthorizerCredentialInput"></a>

```typescript
public readonly readAuthorizerCredentialInput: Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.serviceDirectoryConfigInput"></a>

```typescript
public readonly serviceDirectoryConfigInput: Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCaInput"></a>

```typescript
public readonly sslCaInput: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersionInput`<sup>Optional</sup> <a name="webhookSecretSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersionInput"></a>

```typescript
public readonly webhookSecretSecretVersionInput: string;
```

- *Type:* string

---

##### `hostUri`<sup>Required</sup> <a name="hostUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.hostUri"></a>

```typescript
public readonly hostUri: string;
```

- *Type:* string

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `webhookSecretSecretVersion`<sup>Required</sup> <a name="webhookSecretSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.webhookSecretSecretVersion"></a>

```typescript
public readonly webhookSecretSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGitlabConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfig">Cloudbuildv2ConnectionGitlabConfig</a>

---


### Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput">userTokenSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion">userTokenSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userTokenSecretVersionInput`<sup>Optional</sup> <a name="userTokenSecretVersionInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersionInput"></a>

```typescript
public readonly userTokenSecretVersionInput: string;
```

- *Type:* string

---

##### `userTokenSecretVersion`<sup>Required</sup> <a name="userTokenSecretVersion" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.userTokenSecretVersion"></a>

```typescript
public readonly userTokenSecretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential">Cloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential</a>

---


### Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference <a name="Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig">Cloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig</a>

---


### Cloudbuildv2ConnectionInstallationStateList <a name="Cloudbuildv2ConnectionInstallationStateList" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get"></a>

```typescript
public get(index: number): Cloudbuildv2ConnectionInstallationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Cloudbuildv2ConnectionInstallationStateOutputReference <a name="Cloudbuildv2ConnectionInstallationStateOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri">actionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionUri`<sup>Required</sup> <a name="actionUri" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.actionUri"></a>

```typescript
public readonly actionUri: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudbuildv2ConnectionInstallationState;
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionInstallationState">Cloudbuildv2ConnectionInstallationState</a>

---


### Cloudbuildv2ConnectionTimeoutsOutputReference <a name="Cloudbuildv2ConnectionTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudbuildv2Connection } from '@cdktf/provider-google'

new cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Cloudbuildv2ConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudbuildv2Connection.Cloudbuildv2ConnectionTimeouts">Cloudbuildv2ConnectionTimeouts</a>

---



